import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { confirmAlert } from "react-confirm-alert";
import AddColumn from "./AddColumn";
import Column from "./Column";
import MenuButton from "../common/Button/MenuButton";
import { deleteBoard, dragColumn, renameBoard } from "../../redux/boards";
import { dragTask } from "../../redux/columns";
import styles from "./index.module.css";
import { selectBoardById } from "../../redux/selectors";
import Confirm from "../common/Modal/Confirm";

const BoardTitle = memo(({ title, id }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (title !== data.title) {
      dispatch(
        renameBoard({
          id,
          ...data,
        })
      );
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        {...register("title", {
          required: true,
          maxLength: 512,
          value: title,
        })}
        onBlur={onSubmit}
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
  const history = useHistory();
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

  const handleDelete = useCallback(() => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <Confirm
          visible
          title="Delete this board?"
          onDismiss={onClose}
          buttonText="Yes, delete"
          onConfirm={() => {
            history.replace("/");
            dispatch(deleteBoard(id));
            onClose();
          }}
        />
      ),
    });
  }, [dispatch, history, id]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BoardTitle id={id} title={board.title} />
        <MenuButton name="fa-trash" onClick={handleDelete} />
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
