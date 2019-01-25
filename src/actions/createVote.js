import request from 'superagent'

import store from "./../store";
import constant from "./../constant";

// action
export const PUSH_CONDTION = "PUSH_CONDTION"; // 条件ボタンを押した時
export const CREATE_PLAN = "CREATE_PLAN";
export const CHANGE_TEXT = "CHANGE_TEXT";

// 条件のボタンを押されたときの処理
export async function changeCondition(conditionName){
  // 変更前のstate
  const oldState = store.getState().createVote;

  // 変更後のstate
  var newState = Object.assign({}, oldState);

  // 元が0なら1に。1なら0に
  newState[conditionName] = 1 - newState[conditionName];

  return {
    newState: newState,
    type: PUSH_CONDTION,
  }
}

// 作成ボタンを押された時にlambdaにアクセスする
export async function createPlan(e){
  var station = document.getElementById("input-station").value;

  // 駅名が入力されているかの処理
  // 入力されていなかったら入力を促す
  if(!station){
    alert("駅名を入力してください");
    return {
      type: CREATE_PLAN,
    }
  }

  // loadingを表示する
  document.getElementById("overlay").style.display = "block";
  
  // lambdaにアクセス
  // okが帰ってきたら画面を閉じる
  var resStatus;

  await request
  .post(constant.lambdaIzvoteCreatePlan)
    .send({
      "station": "新宿駅",
      "groupID": "0123456",
      "lineID": "lineuserid",
      "conditions": {
        "privateRoom": 1,
        "bottomlessCup": 0,
        "buffet": 1
      }
    }).then( data => {
      resStatus = data.body.status;
    }).catch( err => {
      resStatus = "err";
    });

  // loadingを非表示に
  document.getElementById("overlay").style.display = "none";

  if(resStatus === "ok"){
  }else{
    alert("正常に作成できませんでした。");
  }

  return {
    type: CREATE_PLAN,
  }
}

export async function onChange(e){
  console.log(e.target.value);
  return {
    type: CHANGE_TEXT,
    text: e.target.value,
  }
}
