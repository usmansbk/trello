import styles from "./Cards.module.css";

const Card = ({ title }) => (
  <div className={styles.card}>
    <p className={styles.details}>{title}</p>
  </div>
);

const Cards = ({ data = [] }) => {
  return (
    <ul className={styles.list}>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Card title={title} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
