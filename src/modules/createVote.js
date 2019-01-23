import store from "./../store";

// action
const PUSH_CONDTION = "PUSH_CONDTION"; // 条件ボタンを押した時

// action creatore
//
// 条件のボタンを押されたときの処理
export function changeCondition(conditionName){
  var state = store.getState();
  if(state[conditionName] === 0){
    state[conditionName] = 1;
  }else{
    state[conditionName] = 0;
  }
  //// 現在の条件の状態
  //var nowCondition = store.getState()[conditionName];

  //// 次の条件の状態を保持する変数
  //var nextCondition;

  //if(nowCondition === 0){
  //  nextCondition = 1;
  //}else{
  //  nextCondition = 0
  //}

  return {
    state: state,
    type: PUSH_CONDTION,
  }
}

// reducer
const initialState = {
  privateRoom: 0, // 個室あり
  bottomlessCup: 0, // 飲み放題
  buffet: 0, // 食べ放題
}

export default function reducer(state = initialState, action) {

  console.log("reducer");
  console.log(state);
  switch (action.type) {
    case PUSH_CONDTION:
      return action.state;
      //return Object.assign({},state, {
      //  state: action.state,
      //});
    default:
      return state;
  }

}
