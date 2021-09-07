import clsx from "clsx";
import Modal from "react-modal";
import styles from "./index.module.css";

const CustomModal = ({
  children,
  visible,
  onDismiss,
  contentLabel,
  className,
}) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onDismiss}
      contentLabel={contentLabel}
      preventScroll
      ariaHideApp={false}
      className={clsx(styles.root, className)}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
