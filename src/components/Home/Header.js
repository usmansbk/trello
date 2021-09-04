import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loadingLogo from "./imgs/loading.gif";
import logo from "./imgs/header-logo.gif";
import Icon from "../common/Icon";

const Logo = ({ loading }) => (
  <Link to="/">
    <img src={loading ? loadingLogo : logo} alt="" className={styles.loading} />
  </Link>
);

const IconButton = ({ name }) => (
  <button className={styles.menuButton}>
    <Icon name={name} className={styles.icon} />
  </button>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <IconButton name="fa-home" />
      <div className={styles.content}>
        <Logo loading />
      </div>
      <IconButton name="fa-plus" />
    </header>
  );
};

export default Header;
