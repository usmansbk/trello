import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import boards from "./boards";
import columns from "./columns";
import tasks from "./tasks";

const reducer = combineReducers({
  boards,
  columns,
  tasks,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
