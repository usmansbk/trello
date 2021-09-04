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
                <a className={styles.link} href="/forgot">
                  Can't log in?
                </a>
              </li>
              <li className={styles.dot}>
                <a className={styles.link} href="/signup">
                  Sign up for an account
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
