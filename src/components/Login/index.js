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
          <form className={styles.form}>
            <h1 className={styles.title}>Log in to Trello</h1>
            <TextInput placeholder="Enter email" type="email" />
            <TextInput placeholder="Enter password" type="password" />
            <Button type="submit" value="Log in" />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
