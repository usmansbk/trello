import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loading from "./loading.gif";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={loading} alt="" className={styles.loading} />
      </Link>
    </header>
  );
};

export default Header;
