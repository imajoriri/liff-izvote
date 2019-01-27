import { createStore, applyMiddleware, combineReducers } from "redux";

import createVote from "./createVote";
import toVote from "./toVote";
import resultVote from "./resultVote";

const reducer = combineReducers({
  createVote,
  toVote,
  resultVote,
})
export default reducer;


