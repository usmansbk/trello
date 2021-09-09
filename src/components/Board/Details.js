import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { confirmAlert } from "react-confirm-alert";
import Modal from "../common/Modal";
import Icon from "../common/Icon";
import IconButton from "../common/Button/IconButton";
import Confirm from "../common/Modal/Confirm";
import styles from "./Details.module.css";
import { useForm } from "react-hook-form";
import { updateTask } from "../../redux/tasks";
import { deleteTask } from "../../redux/actions";

const Subtitle = memo(({ title, icon }) => {
  return (
    <div className={styles.header}>
      <Icon name={icon} className={styles.icon} />
      <h2 className={styles.subtitle}>{title}</h2>
    </div>
  );
});

const SideBar = memo(({ taskId, columnId, onDismiss }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <Confirm
          visible
          title="Delete this card?"
          onDismiss={onClose}
          buttonText="Yes, delete"
          onConfirm={() => {
            dispatch(
              deleteTask({
                taskId,
                columnId,
              })
            );
            onClose();
            onDismiss();
          }}
        />
      ),
    });
  }, [columnId, dispatch, onDismiss, taskId]);

  return (
    <aside className={styles.sideBar}>
      <h3 className={styles.sidebarTitle}>ACTIONS</h3>
      <div className={styles.actions}>
        <IconButton onClick={handleDelete} name="fa-trash-alt" text="Delete" />
      </div>
    </aside>
  );
});

const Details = memo(({ id, columnTitle, visible, onDismiss }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks[id]);
  const { title, description = "", columnId } = task;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
      description,
    },
  });

  const onSubmit = handleSubmit((data) =>
    dispatch(
      updateTask({
        id,
        ...data,
      })
    )
  );

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit();
        e.preventDefault();
      }
    },
    [onSubmit]
  );

  return (
    <Modal
      className={styles.modal}
      visible={visible}
      onDismiss={onDismiss}
      contentLabel="Task details"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <Icon name="fa-pen-alt" className={styles.icon} />
          <div className={styles.headerContent}>
            <TextareaAutosize
              {...register("title", {
                required: true,
                maxLength: 512,
              })}
              spellCheck={false}
              className={styles.title}
              onKeyDown={handleEnter}
              onBlur={onSubmit}
            />
            <span>{columnTitle}</span>
          </div>
          <button className={styles.closeButton} onClick={onDismiss}>
            <Icon name="fa-times" />
          </button>
        </header>
        <div className={styles.body}>
          <div className={styles.bodyContent}>
            <Subtitle icon="fa-align-left" title="Description" />
            <div className={styles.gutter}>
              <TextareaAutosize
                {...register("description", {
                  maxLength: 512,
                })}
                className={styles.detailsInput}
                spellCheck={false}
                placeholder="Add a more detailed description..."
                onKeyDown={handleEnter}
                onBlur={onSubmit}
              />
            </div>
          </div>
          <SideBar taskId={id} columnId={columnId} onDismiss={onDismiss} />
        </div>
      </div>
    </Modal>
  );
});

export default Details;
