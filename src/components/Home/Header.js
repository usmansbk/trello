import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loadingLogo from "./imgs/loading.gif";
import logo from "./imgs/header-logo.gif";
import Icon from "../common/Icon";
import clsx from "clsx";

const Logo = ({ loading }) => (
  <Link to="/">
    <img src={loading ? loadingLogo : logo} alt="" className={styles.loading} />
  </Link>
);

const IconButton = ({ name, link, to }) => {
  if (link) {
    return (
      <Link className={styles.menuButton} to={to}>
        <Icon name={name} className={styles.icon} />
      </Link>
    );
  }

  return (
    <button className={styles.menuButton}>
      <Icon name={name} className={styles.icon} />
    </button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuButtons}>
        <IconButton name="fa-home" link to="/" />
      </div>
      <div className={styles.content}>
        <Logo loading />
      </div>
      <div className={clsx(styles.menuButtons, styles.justifyEnd)}>
        <IconButton name="fa-plus" />
        <IconButton name="fa-bell" />
        <IconButton name="fa-sign-out-alt" />
      </div>
    </header>
  );
};

export default Header;
