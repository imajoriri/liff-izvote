import { createStore, applyMiddleware, combineReducers } from "redux";

import createVote from "./createVote";
import toVote from "./toVote";

const reducer = combineReducers({
  createVote,
  toVote,
})
export default reducer;


