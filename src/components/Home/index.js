import { Route, Switch } from "react-router";
import Header from "./Header";
import Boards from "./Boards";
import Board from "../Board";
import NoMatch from "../NoMatch";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Boards} />
        <Route path="/:id" component={Board} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Home;
