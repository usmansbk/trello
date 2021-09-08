import { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import IconButton from "../common/Button/IconButton";
import CardButton from "../common/Button/CardButton";
import styles from "./AddCard.module.css";

const AddCard = ({ onCancel }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit();
      }
      e.stopPropagation();
    },
    [onSubmit]
  );

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.card}>
        <TextareaAutosize
          {...register("title", { required: true, maxLength: 512 })}
          autoFocus
          onKeyDown={handleEnter}
          className={styles.textarea}
          placeholder="Enter a title for this card..."
        />
      </div>
      <div className={styles.actions}>
        <CardButton text="Add card" type="submit" />
        <IconButton name="fa-times" onClick={onCancel} />
      </div>
    </form>
  );
};

export default AddCard;
