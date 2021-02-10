import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = () => {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, logger));

  const store = createStore(rootReducer, enhancer);
  return store;
};

export default configureStore;
