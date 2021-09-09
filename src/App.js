import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgot from "./components/Forgot";
import Home from "./components/Home";
import configStore from "./redux";

const { store, persistor } = configStore();

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/forgot",
    component: Forgot,
  },
  {
    path: "/",
    component: Home,
  },
];

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} />
            ))}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
