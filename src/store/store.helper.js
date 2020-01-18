import { combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import asyncDispatchMiddleware from "./asyncDispatchMiddleware";
import readyStatePromiseMiddleware from "./readyStatePromiseMiddleware";
import reducers from "./reducers";

const preloadedState = {};

const SHOW_LOGS = false;
const loggerMiddleware = createLogger({ predicate: () => SHOW_LOGS });

const reducer = combineReducers(reducers);

const middleware = [
  loggerMiddleware,
  readyStatePromiseMiddleware,
  asyncDispatchMiddleware
];

let storeHelper = configureStore({
  middleware,
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState
});

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./reducers", () => storeHelper.replaceReducer(reducers));
}

export default storeHelper;
