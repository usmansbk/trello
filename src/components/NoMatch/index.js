import styles from "./index.module.css";

const NoMatch = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Malformed URL</h1>
      <p className={styles.message}>
        The link you entered does not look like a valid Trello link. If someone
        gave you this link, you may need to ask them to check that it's correct.
      </p>
    </div>
  </section>
);

export default NoMatch;
