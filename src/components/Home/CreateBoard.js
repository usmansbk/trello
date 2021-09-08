import { useForm } from "react-hook-form";
import Modal from "../common/Modal";
import Icon from "../common/Icon";
import Button from "../common/Button";
import styles from "./CreateBoard.module.css";

const CreateBoard = ({ visible, onDismiss }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentLabel="Create a new board"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <button onClick={onDismiss} className={styles.closeButton}>
            <Icon name="fa-times" className={styles.close} />
          </button>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.top}>
              <input
                {...register("title", { required: true, maxLength: 512 })}
                autoFocus
                className={styles.input}
                placeholder="Add board title"
              />
            </div>
            <div className={styles.bottom}>
              <Button small value="Create board" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoard;
