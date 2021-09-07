import Modal from "react-modal";
import styles from "./index.module.css";

const CustomModal = ({ children, visible, onDismiss, contentLabel }) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onDismiss}
      contentLabel={contentLabel}
      preventScroll
      ariaHideApp={false}
      className={styles.root}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
