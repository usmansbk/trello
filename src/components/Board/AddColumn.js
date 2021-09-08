import { nanoid } from "nanoid";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { memo, useState } from "react";
import CardButton from "../common/Button/CardButton";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import styles from "./AddColumn.module.css";

const Input = memo(({ onCancel }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      const data = {
        id: nanoid(),
        ...values,
      };
      console.log(data);
    },
    validationSchema: Yup.object({
      title: Yup.string().max(512).required(),
    }),
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <input
        id="title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
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
    <span className={styles.buttonText}>Add another list</span>
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
