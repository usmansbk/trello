import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loadingLogo from "./imgs/loading.gif";
import logo from "./imgs/header-logo.gif";

const Header = ({ loading }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={loading ? loadingLogo : logo}
          alt=""
          className={styles.loading}
        />
      </Link>
    </header>
  );
};

export default Header;
