import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgot from "./components/Forgot";
import Home from "./components/Home";
import "./App.css";

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
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} exact path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
