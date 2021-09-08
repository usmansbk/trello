import Modal from "../common/Modal";
import Icon from "../common/Icon";
import Button from "../common/Button";
import styles from "./CreateBoard.module.css";
import { useFormik } from "formik";

const CreateBoard = ({ visible, onDismiss }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.top}>
              <input
                id="title"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
                className={styles.input}
                placeholder="Add board title"
              />
            </div>
            <div className={styles.bottom}>
              <Button type="submit" small value="Create board" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoard;
