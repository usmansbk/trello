import { useState, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { confirmAlert } from "react-confirm-alert";
import TextareaAutosize from "react-textarea-autosize";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./Column.module.css";
import Details from "./Details";
import Confirm from "../common/Modal/Confirm";
import {
  selectColumnById,
  makeSelectTasksByIds,
  makeSelectBoardColumns,
} from "../../redux/selectors";
import { renameColumn } from "../../redux/columns";
import { deleteColumn, moveTask } from "../../redux/actions";
import "./menu.css";

const ColumnHeader = memo(({ id, boardId, title, ...props }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      title,
    },
  });

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  const onSubmit = handleSubmit((data) => {
    if (isDirty) {
      dispatch(
        renameColumn({
          id,
          ...data,
        })
      );
    }
    toggleEdit();
  });

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit();
        e.preventDefault();
      }
    },
    [onSubmit]
  );

  const handleDelete = useCallback(() => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <Confirm
          visible
          title="Delete this list?"
          onDismiss={onClose}
          buttonText="Yes, delete"
          onConfirm={() => {
            dispatch(
              deleteColumn({
                columnId: id,
                boardId,
              })
            );
            onClose();
          }}
        />
      ),
    });
  }, [dispatch, id, boardId]);

  return (
    <div className={styles.columnHeader} {...props}>
      {edit ? (
        <TextareaAutosize
          {...register("title", {
            required: true,
            maxLength: 512,
          })}
          onKeyDown={handleEnter}
          onBlur={onSubmit}
          spellCheck={false}
          className={clsx(styles.columnTitle, styles.editTitle)}
          autoFocus
        />
      ) : (
        <h2 onClick={toggleEdit} className={styles.columnTitle}>
          {title}
        </h2>
      )}
      <IconButton
        className={styles.moreButton}
        name="fa-trash-alt"
        onClick={handleDelete}
        tooltip="Delete list"
      />
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

const MenuHeader = memo(({ title }) => (
  <div className="menu-header">
    <h3 className="menu-header-title">{title}</h3>
  </div>
));

const Menu = memo(({ id, sourceId }) => {
  const dispatch = useDispatch();
  const selectOptions = useCallback(makeSelectBoardColumns, []);
  const menuOptions = useSelector(selectOptions(id));
  return (
    <ContextMenu id={id}>
      <MenuHeader title="Move to" />
      {menuOptions.map(({ title, id: destinationId }) => (
        <MenuItem
          key={destinationId}
          onClick={() =>
            dispatch(moveTask({ taskId: id, sourceId, destinationId }))
          }
        >
          {title}
        </MenuItem>
      ))}
    </ContextMenu>
  );
});

const Card = memo(({ title, id, index, onPressItem, columnId }) => {
  const onPress = useCallback(() => onPressItem(id), [onPressItem, id]);
  console.log("render", id);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <>
          <ContextMenuTrigger id={id}>
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
          </ContextMenuTrigger>
          <Menu id={id} sourceId={columnId} />
        </>
      )}
    </Draggable>
  );
});

const CardList = memo(({ taskIds, columnTitle }) => {
  const selectTaskByIds = useCallback(makeSelectTasksByIds, []);
  const tasks = useSelector(selectTaskByIds(taskIds));

  const [selectedId, setSelectedId] = useState(null);

  const onPressCard = useCallback((id) => setSelectedId(id), []);
  const onDismiss = useCallback(() => setSelectedId(null), []);

  return (
    <>
      {tasks.map(({ id, title, columnId }, index) => (
        <Card
          key={id}
          id={id}
          columnId={columnId}
          title={title}
          index={index}
          onPressItem={onPressCard}
        />
      ))}
      {!!selectedId && (
        <Details
          id={selectedId}
          columnTitle={columnTitle}
          visible
          onDismiss={onDismiss}
        />
      )}
    </>
  );
});

const Column = memo(({ columnId, index }) => {
  const { title, boardId, taskIds } = useSelector(selectColumnById(columnId));

  const [showComposer, setComposerVisible] = useState(false);

  const toggleComposer = useCallback(
    () => setComposerVisible(!showComposer),
    [showComposer]
  );

  return (
    <Draggable draggableId={columnId} index={index}>
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
            <ColumnHeader
              id={columnId}
              boardId={boardId}
              title={title}
              {...provided.dragHandleProps}
            />
            <Droppable droppableId={columnId} type="task">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.list}
                >
                  {<CardList columnTitle={title} taskIds={taskIds} />}
                  {provided.placeholder}
                  {showComposer && (
                    <AddCard columnId={columnId} onCancel={toggleComposer} />
                  )}
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
