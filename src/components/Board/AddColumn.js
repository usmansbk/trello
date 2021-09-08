import clsx from "clsx";
import { nanoid } from "nanoid";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
import { createColumn } from "../../redux/actions";
import CardButton from "../common/Button/CardButton";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import styles from "./AddColumn.module.css";

const Input = memo(({ onCancel }) => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(
      createColumn({
        boardId: params.id,
        column: {
          ...data,
          id: nanoid(),
        },
      })
    );
    reset();
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        {...register("title", { required: true, maxLength: 512 })}
        autoFocus
        className={styles.input}
        placeholder="Enter list title..."
      />
      <div className={styles.actions}>
        <CardButton type="submit" text="Add list" />
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
});

const AddListButton = memo(({ onClick }) => (
  <button className={styles.button} onClick={onClick}>
    <Icon
      name="fa-plus"
      className={clsx(styles.buttonText, styles.buttonIcon)}
    />
    <span className={styles.buttonText}>Add a list</span>
  </button>
));

const AddColumn = memo(() => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);

  return (
    <div className={styles.column}>
      <div className={clsx(styles.container, edit && styles.card)}>
        {!edit ? (
          <AddListButton onClick={toggleEdit} />
        ) : (
          <Input onCancel={toggleEdit} />
        )}
      </div>
    </div>
  );
});

export default AddColumn;
