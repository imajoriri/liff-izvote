import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";

// action
export const PUSH_CONDTION = "PUSH_CONDTION"; // 条件ボタンを押した時
export const CREATE_PLAN = "CREATE_PLAN";
export const CHANGE_STATION= "CHANGE_STATION";

// 条件のボタンを押されたときの処理
export async function changeCondition(conditionName){
  //alert(JSON.stringify(liff));
  //alert(liff._auth.context.userId);
  //alert(Object.keys(liff));
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
// 正常に作成されたら画面を閉じ、メッセージを送る
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

  var state = store.getState().createVote;

  var station = state.station;

  // 駅名の最後に「駅」がなかったら追加
  if(station.slice(-1) !== "駅"){
    station = station + "駅";
  }

  await request
  .post(constant.lambdaIzvoteCreatePlan)
    .send({
      "station": station,
      // groupIdはトークルームの時はroomIdにする
      "groupID": liffContext.roomId || liffContext.groupId,
      "lineID": liffContext.userId,
      "conditions": {
        "privateRoom": state.privateRoom,
        "bottomlessCup": state.bottomlessCup,
        "buffet": state.buffet
      }
    }).then( data => {
      resStatus = data.body.status;
    }).catch( err => {
      resStatus = "err";
    });

  // loadingを非表示に
  document.getElementById("overlay").style.display = "none";

  if(resStatus === "ok"){

    // 画面を閉じて、メッセージを送る
    liff.sendMessages([
      {
        type:'text',
        text:'新しく飲みの計画を立てました。以下のリンクから投票してください'
      },
      {
        type:'text',
        text:'link'
      },
    ]).then(() => {
      // 画面を閉じる
      liff.closeWindow();
    }).catch((err) => {
      alert("正常に作成できませんでした。");
    });

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
    type: CHANGE_STATION,
    station: e.target.value,
  }
}
