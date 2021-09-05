import { Route, Switch, useRouteMatch } from "react-router";
import Boards from "../Boards";
import Header from "./Header";
import styles from "./index.module.css";

const routes = [
  {
    path: "",
    component: Boards,
  },
];

const Home = () => {
  const { path: routePath } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={`${routePath}`} component={component} />
        ))}
      </Switch>
    </div>
  );
};

export default Home;
