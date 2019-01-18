/*
 * store, action, reducerを作成
 */

// action
const SAMPLE = "SAMPLE";

// action creatore
export function hoge(){
  return {
    type: SAMPLE,
  }
}

// reducer
const initialState = {
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case SAMPLE:
      return Object.assign({},state, {
      });
    default:
      return state;
  }

}
