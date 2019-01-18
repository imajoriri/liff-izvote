import { createStore, applyMiddleware, combineReducers } from "redux";

import sample from "./modules/sample";

const reducer = combineReducers({sample})

// store
const myMiddleware = store => next => act => {
  act.then(res => {
    next(res);
  });
};

const store = createStore(reducer, applyMiddleware(myMiddleware));
//const store = createStore(reducer);
export default store;
