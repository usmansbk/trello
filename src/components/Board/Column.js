import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Draggable, Droppable } from "react-beautiful-dnd";
import clsx from "clsx";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./Column.module.css";

const ColumnHeader = ({ title, ...props }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className={styles.columnHeader} {...props}>
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

const Column = ({ id, title, data, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={styles.column}
        >
          <div className={styles.cardList}>
            <ColumnHeader title={title} {...provided.dragHandleProps} />
            <Droppable droppableId={id} type="task">
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
      )}
    </Draggable>
  );
};

export default Column;
