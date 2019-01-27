import {
  FETCH_DB_DATA,
  CLICK_IZAKAYA,
  UPDATE_VOTE,
  OPEN_DETAIL,
} from "./../actions/toVote";

// reducer
const initialState = {
  planId: "",
  plan: {},
  vote: [], // shopIDを入れていく
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_DB_DATA:
      return Object.assign({}, state, {
        plan: action.plan,
        planId: action.planId,
        vote: action.vote,
      })
    case CLICK_IZAKAYA:
      return Object.assign({}, state, {
        vote: action.vote
      })
    case UPDATE_VOTE:
    case OPEN_DETAIL:
      return Object.assign({}, state, {
      })
    default:
      return state;
  }

}
