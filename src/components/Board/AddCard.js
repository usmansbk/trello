import { nanoid } from "nanoid";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextareaAutosize from "react-textarea-autosize";
import IconButton from "../common/Button/IconButton";
import CardButton from "../common/Button/CardButton";
import styles from "./AddCard.module.css";

const AddCard = ({ onCancel }) => {
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
      <div className={styles.card}>
        <TextareaAutosize
          id="title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          autoFocus
          className={styles.textarea}
          placeholder="Enter a title for this card..."
        />
      </div>
      <div className={styles.actions}>
        <CardButton type="submit" text="Add card" />
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
};

export default AddCard;
