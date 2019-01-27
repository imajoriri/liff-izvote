import {
  PUSH_CONDTION,
  CREATE_PLAN,
  CHANGE_STATION,
} from "./../actions/createVote";

// reducer
const initialState = {
  privateRoom: 0, // 個室あり
  bottomlessCup: 0, // 飲み放題
  buffet: 0, // 食べ放題
  station: "",
  planId: "",
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PUSH_CONDTION:
      return action.newState;
    case CHANGE_STATION:
      return Object.assign({}, state, {
        station: action.station,
      })
    default:
      return state;
  }

}
