import { useState, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { Draggable, Droppable } from "react-beautiful-dnd";
import clsx from "clsx";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./Column.module.css";
import Details from "./Details";

const ColumnHeader = memo(({ title, ...props }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

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
});

const FooterButton = memo(({ onClick }) => {
  return (
    <button className={styles.footerButton} onClick={onClick}>
      <Icon name="fa-plus" />
      <span className={styles.footerButtonText}>Add a card</span>
    </button>
  );
});

const Card = memo(({ title, id, index, onPressItem }) => {
  const onPress = useCallback(() => onPressItem(id), [onPressItem, id]);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onPress}
        >
          <div
            className={clsx(
              styles.card,
              snapshot.isDragging && styles.dragging
            )}
          >
            <p className={styles.details}>{title}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
});

const CardList = memo(({ data }) => {
  const [seletedId, setSelectedId] = useState(null);

  const onPressCard = useCallback((id) => setSelectedId(id), []);
  const onDismiss = useCallback(() => setSelectedId(null), []);

  return (
    <>
      {data.map(({ id, title }, index) => (
        <Card
          key={id}
          id={id}
          title={title}
          index={index}
          onPressItem={onPressCard}
        />
      ))}
      <Details id={seletedId} visible={!!seletedId} onDismiss={onDismiss} />
    </>
  );
});

const Column = memo(({ column, index }) => {
  const { title, id, taskIds } = column;

  const taskMap = useSelector((state) => state.tasks);
  const tasks = taskIds.map((taskId) => taskMap[taskId]);

  const [showComposer, setComposerVisible] = useState(false);

  const toggleComposer = useCallback(
    () => setComposerVisible(!showComposer),
    [showComposer]
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={clsx(
            styles.column,
            snapshot.isDragging && styles.dragging
          )}
        >
          <div className={styles.content}>
            <ColumnHeader title={title} {...provided.dragHandleProps} />
            <Droppable droppableId={id} type="task">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.list}
                >
                  {<CardList data={tasks} />}
                  {provided.placeholder}
                  {showComposer && <AddCard onCancel={toggleComposer} />}
                </div>
              )}
            </Droppable>
            {!showComposer && (
              <div className={styles.footer}>
                <FooterButton onClick={toggleComposer} />
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
});

export default Column;
