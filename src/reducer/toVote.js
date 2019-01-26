import {
  FETCH_DB_DATA,
} from "./../actions/toVote";

// reducer
const initialState = {
  plan: {},
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_DB_DATA:
      return Object.assign({}, state, {
        plan: action.plan,
      })
    default:
      return state;
  }

}
