import {
  PUSH_CONDTION,
  CREATE_PLAN,
  CHANGE_STATION,
  FETCH_GNAVI_DESIGNATED,
  ADD_DESIGNATED_ID_LIST,
} from "./../actions/createVote";

// reducer
const initialState = {
  privateRoom: 0, // 個室あり
  bottomlessCup: 0, // 飲み放題
  buffet: 0, // 食べ放題
  station: "",
  planId: "",
  shopDataList: [],
  designatedIdList: [],
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case PUSH_CONDTION:
      return action.newState;

    case CHANGE_STATION:
      return Object.assign({}, state, {
        station: action.station,
      })

    case FETCH_GNAVI_DESIGNATED:
      return Object.assign({}, state, {
        shopDataList: action.shopDataList,
      })

    case ADD_DESIGNATED_ID_LIST:
      return Object.assign({}, state, {
        designatedIdList: action.designatedIdList,
      })

    default:
      return state;
  }

}
