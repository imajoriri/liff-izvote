import {
  FETCH_RANKING_DATA
} from "./../actions/resultVote";

// reducer
const initialState = {
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_RANKING_DATA:
      return Object.assign({}, state, {
      })
    default:
      return state;
  }

}
