import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import "./App.css";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
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
