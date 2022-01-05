import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "./auth/Reducer";
import appReducer from "./app/reducer";
import thunk from "redux-thunk"


const rootReducer = combineReducers({ auth: authReducer, app: appReducer });


const loggerMiddleware = (store) => (next) => (action) => {
    
  if (typeof action === "function") {
    const func = action;
    return func(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

let enhancers = compose;

if (process.env.NODE_ENV !== "production") {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = enhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);