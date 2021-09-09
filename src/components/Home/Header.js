import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loadingLogo from "./imgs/loading.gif";
import logo from "./imgs/header-logo.gif";
import MenuIconButton from "../common/Button/MenuButton";
import clsx from "clsx";

const Logo = ({ loading }) => (
  <Link to="/" className={styles.brandLink}>
    <img src={loading ? loadingLogo : logo} alt="" className={styles.loading} />
  </Link>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuButtons}>
        <MenuIconButton name="fa-home" to="/" />
      </div>
      <div className={styles.content}>
        <Logo loading />
      </div>
      <div className={clsx(styles.menuButtons, styles.justifyEnd)}>
        <MenuIconButton name="fa-sign-out-alt" to="/login" />
      </div>
    </header>
  );
};

export default Header;
