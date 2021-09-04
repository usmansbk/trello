import logo from "./logo.svg";
import styles from "./index.module.css";

const Logo = () => {
  return (
    <div>
      <img src={logo} className={styles.logo} alt="" />
      <h1>Trello</h1>
    </div>
  );
};

export default Logo;
