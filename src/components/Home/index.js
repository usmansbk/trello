import { Route, Switch } from "react-router";
import Header from "./Header";
import Boards from "./Boards";
import Board from "../Board";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Boards} />
        <Route path="/:id" component={Board} />
      </Switch>
    </div>
  );
};

export default Home;
