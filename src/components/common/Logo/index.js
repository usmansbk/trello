import logo from "./logo.svg";
import styles from "./index.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="" />
      <h1 className={styles.text}>Trello</h1>
    </div>
  );
};

export default Logo;
