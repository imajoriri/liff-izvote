import {
  FETCH_RANKING_DATA
} from "./../actions/resultVote";

// reducer
const initialState = {
  users: [],
  planId: "",
  plan: {},
  allUserVotes: {},
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_RANKING_DATA:
      return Object.assign({}, state, {
        users: action.users,
        plan: action.plan,
        planId: action.planId,
        allUserVotes: action.allUserVotes,
      })
    default:
      return state;
  }

}
