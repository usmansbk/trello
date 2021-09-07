import { useState } from "react";
import AutosizeInput from "react-input-autosize";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import clsx from "clsx";
import AddColumn from "./AddColumn";
import Column from "./Column";
import MenuButton from "../common/Button/MenuButton";
import styles from "./index.module.css";
import initialData from "../initialData";

const BoardTitle = ({ title }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const showEdit = () => setEdit(true);
  const hideEdit = () => setEdit(false);

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
};

const Board = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = state.columns[source.droppableId];
    const destinationColumn = state.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTasks = [...sourceColumn.taskIds];
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTasks,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
    } else {
      const newSourceTaskIds = [...sourceColumn.taskIds];
      newSourceTaskIds.splice(source.index, 1);
      const newSourceColumn = {
        ...sourceColumn,
        taskIds: newSourceTaskIds,
      };

      const newDestinationTaskIds = [...destinationColumn.taskIds];
      newDestinationTaskIds.splice(destination.index, 0, draggableId);
      const newDestinationColumn = {
        ...destinationColumn,
        taskIds: newDestinationTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestinationColumn.id]: newDestinationColumn,
        },
      };

      setState(newState);
    }
    return;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BoardTitle title="Trello Clone WIP" />
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
                {state.columnOrder.map((columnId, index) => {
                  const column = state.columns[columnId];
                  const { title, id, taskIds } = column;
                  const tasks = taskIds.map((taskId) => state.tasks[taskId]);

                  return (
                    <Column
                      key={id}
                      id={id}
                      title={title}
                      data={tasks}
                      index={index}
                    />
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
