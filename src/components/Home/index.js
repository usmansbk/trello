import Header from "./Header";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
