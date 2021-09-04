import { Link } from "react-router-dom";
import clsx from "clsx";
import Logo from "../common/Logo";
import TextInput from "../common/TextInput";
import Button, { SocialButton } from "../common/Button";
import styles from "./index.module.css";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const onChangeText = (e) => setEmail(e.target.value);

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.body}>
        <section className={styles.content}>
          <div className={styles.wrapper}>
            <form>
              <h1 className={styles.title}>Sign up for your account</h1>
              <TextInput
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={onChangeText}
              />
              <TextInput placeholder="Enter full name" type="text" />
              <p className={styles.tos}>
                By signin up, you confirm that you've read and accepted our{" "}
                <a className={clsx(styles.link, styles.quiet)} href="/legal">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className={clsx(styles.link, styles.quiet)} href="/privacy">
                  Privacy Policy
                </a>
              </p>
              <Button type="submit" value="Log in" />
            </form>
            {!email && (
              <>
                <div className={styles.orSeparator}>OR</div>
                <div>
                  <SocialButton text="Continue with Google" />
                </div>
                <hr className={styles.divider} />
                <ul className={styles.formLinks}>
                  <li>
                    <Link className={styles.link} to="/">
                      Already have an account? Log In
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
