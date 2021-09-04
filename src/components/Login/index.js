import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import TextInput from "../common/TextInput";
import Button, { SocialButton } from "../common/Button";
import styles from "./index.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.body}>
        <section className={styles.content}>
          <div className={styles.wrapper}>
            <form>
              <h1 className={styles.title}>Log in to Trello</h1>
              <TextInput placeholder="Enter email" type="email" />
              <TextInput placeholder="Enter password" type="password" />
              <Button type="submit" value="Log in" />
            </form>
            <div className={styles.orSeparator}>OR</div>
            <div>
              <SocialButton text="Continue with Google" />
            </div>
            <hr className={styles.divider} />
            <ul className={styles.formLinks}>
              <li>
                <Link className={styles.link} to="/forgot">
                  Can't log in?
                </Link>
              </li>
              <li className={styles.dot}>
                <Link className={styles.link} to="/signup">
                  Sign up for an account
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
