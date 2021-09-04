import Logo from "../common/Logo";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
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
            <div className={styles.separator}>OR</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
