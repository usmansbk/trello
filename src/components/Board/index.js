import { memo } from "react";
import { useForm } from "react-hook-form";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import AutosizeInput from "react-input-autosize";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import Column from "./Column";
import MenuButton from "../common/Button/MenuButton";
import { dragColumn } from "../../redux/boards";
import { dragTask } from "../../redux/columns";
import styles from "./index.module.css";
import { selectBoardById } from "../../redux/selectors";

const BoardTitle = memo(({ title }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input
        {...register("title", {
          required: true,
          maxLength: 512,
          value: title,
        })}
        autoFocus
        spellCheck={false}
        className={styles.boardTitle}
      />
    </form>
  );
});

const Board = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const dispatch = useDispatch();

  const board = useSelector(selectBoardById(id));

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      return dispatch(dragColumn({ id, result }));
    }

    return dispatch(dragTask({ result }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BoardTitle title={board.title} />
        <MenuButton name="fa-trash" />
      </header>
      <div className={styles.content}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className={styles.board}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {board.columnIds.map((columnId, index) => {
                  return (
                    <Column key={columnId} columnId={columnId} index={index} />
                  );
                })}
                {provided.placeholder}
                <AddColumn />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
