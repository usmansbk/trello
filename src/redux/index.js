import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import boards from "./boards";

const reducer = combineReducers({
  boards,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
