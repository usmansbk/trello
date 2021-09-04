import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import loadingLogo from "./imgs/loading.gif";
import logo from "./imgs/header-logo.gif";

const Logo = ({ loading }) => (
  <Link to="/">
    <img src={loading ? loadingLogo : logo} alt="" className={styles.loading} />
  </Link>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo loading />
    </header>
  );
};

export default Header;
