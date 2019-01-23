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
  test: "test",
}

export default function reducer(state = initialState, action) {
  console.log("sample");
  console.log(state);

  switch (action.type) {
    case SAMPLE:
      return Object.assign({},state, {
      });
    default:
      return state;
  }

}
