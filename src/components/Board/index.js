import { memo, useCallback, useState } from "react";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import AutosizeInput from "react-input-autosize";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import Column from "./Column";
import MenuButton from "../common/Button/MenuButton";
import styles from "./index.module.css";
import { swapColumns } from "../../redux/boards";
import { swapTasks } from "../../redux/columns";

const BoardTitle = memo(({ title }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const showEdit = useCallback(() => setEdit(true), []);
  const hideEdit = useCallback(() => setEdit(false), []);

  return (
    <div onClick={showEdit} className={styles.headerButton}>
      {edit ? (
        <AutosizeInput
          autoFocus
          value={value}
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onBlur={hideEdit}
          inputClassName={clsx(styles.boardTitle, styles.editTitle)}
        />
      ) : (
        <h2 className={styles.boardTitle}>{value}</h2>
      )}
    </div>
  );
});

const Board = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const board = state.boards[id];

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
      return dispatch(swapColumns({ id, result }));
    }

    return dispatch(swapTasks({ result }));
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
                  const column = state.columns[columnId];

                  return (
                    <Column key={columnId} column={column} index={index} />
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
