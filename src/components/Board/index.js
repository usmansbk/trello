import clsx from "clsx";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AutosizeInput from "react-input-autosize";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./index.module.css";
import AddColumn from "./AddColumn";
import MenuButton from "../common/Button/MenuButton";
import initialData from "../initialData";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ColumnHeader = ({ title }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className={styles.columnHeader}>
      {edit ? (
        <TextareaAutosize
          spellCheck={false}
          maxLength="512"
          className={styles.columnTitle}
          autoFocus
          onBlur={toggleEdit}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <h2 onClick={toggleEdit} className={styles.columnTitle}>
          {value}
        </h2>
      )}
      <IconButton className={styles.moreButton} name="fa-ellipsis-h" />
    </div>
  );
};

const FooterButton = ({ onClick }) => {
  return (
    <button className={styles.footerButton} onClick={onClick}>
      <Icon name="fa-plus" />
      <span className={styles.footerButtonText}>Add a card</span>
    </button>
  );
};

const ColumnFooter = () => {
  const [showComposer, setComposerVisible] = useState(false);

  const toggleComposer = () => setComposerVisible(!showComposer);

  return (
    <div className={styles.footer}>
      {showComposer && <AddCard onCancel={toggleComposer} />}
      {!showComposer && <FooterButton onClick={toggleComposer} />}
    </div>
  );
};

const Card = ({ title, id, index }) => (
  <Draggable draggableId={id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={clsx(styles.card, snapshot.isDragging && styles.dragging)}
      >
        <p className={styles.details}>{title}</p>
      </div>
    )}
  </Draggable>
);

const Column = ({ id, title, data }) => {
  return (
    <div className={styles.column}>
      <div className={styles.cardList}>
        <ColumnHeader title={title} />
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.list}
            >
              {data.map(({ id, title }, index) => (
                <div key={id}>
                  <Card id={id} title={title} index={index} />
                </div>
              ))}
              {provided.placeholder}
              <ColumnFooter />
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

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
        <div className={styles.board}>
          <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const { title, id, taskIds } = column;
              const tasks = taskIds.map((taskId) => state.tasks[taskId]);

              return <Column key={id} id={id} title={title} data={tasks} />;
            })}
          </DragDropContext>
          <div className={styles.column}>
            <AddColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
