import {
  PUSH_CONDTION,
  CREATE_PLAN,
  CHANGE_TEXT,
} from "./../actions/createVote";

// reducer
const initialState = {
  privateRoom: 0, // 個室あり
  bottomlessCup: 0, // 飲み放題
  buffet: 0, // 食べ放題
  text: "",
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PUSH_CONDTION:
      return action.newState;
    case CHANGE_TEXT:
      return Object.assign({}, state, {
        text: action.text,
      })
    default:
      return state;
  }

}
