import { createStore, applyMiddleware, combineReducers } from "redux";

import createVote from "./createVote";

const reducer = combineReducers({
  createVote,
})
export default reducer;


