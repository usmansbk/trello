import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import boards from "./boards";
import columns from "./columns";
import tasks from "./tasks";

const reducer = combineReducers({
  boards,
  columns,
  tasks,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const init = () => {
  const store = createStore(persistedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default init;
