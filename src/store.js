import { createStore, applyMiddleware, combineReducers } from "redux";

import createVote from "./modules/createVote";
import sample from "./modules/sample";

const reducer = combineReducers({
  sample,
  createVote,
})

// store
//const myMiddleware = store => next => act => {
//  act.then(res => {
//    next(res);
//  });
//};

//const store = createStore(reducer, applyMiddleware(myMiddleware));
const store = createStore(reducer);
export default store;
