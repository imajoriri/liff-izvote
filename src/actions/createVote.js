import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";

// action
export const PUSH_CONDTION = "PUSH_CONDTION"; // 条件ボタンを押した時
export const CREATE_PLAN = "CREATE_PLAN";
export const CHANGE_STATION = "CHANGE_STATION";
export const FETCH_GNAVI_DESIGNATED = "FETCH_GNAVI_DESIGNATED";
export const ADD_DESIGNATED_ID_LIST = "ADD_DESIGNATED_ID_LIST";
export const FINISH_CHOICE_IZAKAYA = "FINISH_CHOICE_IZAKAYA";

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

  // groupIdはトークルームの時はroomIdにする
  var groupId = liffContext.roomId || liffContext.groupId;

  var dt = new Date();
  var planId = groupId + "_" 
    + String(dt.getFullYear()) 
    + String(dt.getMonth()+1) 
    + String(dt.getDate()) 
    + String(dt.getHours()) 
    + String(dt.getMinutes()) 
    + String(dt.getSeconds())

      await request
      .post(constant.lambdaIzvoteCreatePlan)
      .send({
        planId: planId,
        station: station,
        groupId: groupId,
        lineId: liffContext.userId,
        //designatedIdList: ["b753276", "g753364", "g753367"], // TODO
        designatedIdList: state.designatedIdList, // TODO
        conditions: {
          privateRoom: state.privateRoom,
          bottomlessCup: state.bottomlessCup,
          buffet: state.buffet
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
            "type": "template",
            "altText": station + "で投票が作成されました。",
            "template": {
              "type": "buttons",
              "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
              "imageAspectRatio": "rectangle",
              "imageSize": "cover",
              "imageBackgroundColor": "#FFFFFF",
              "title": station + "で投票が作成されました。",
              "text": "飲みに行ってやってもいい店を投票しよう",
              "defaultAction": {
                "type": "uri",
                "label": "投票する",
                "uri": constant.liffURL.toVote + `?planId=${planId}`
              },
              "actions": [
                {
                  "type": "uri",
                  "label": "投票する",
                  "uri": constant.liffURL.toVote + `?planId=${planId}`
                }
              ]
            }
          }
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

// --- choiceIzakaya ---

// lambda経由でgnavi情報を取得
// params: station, offset
export async function fetchGnaviDesignated(){
  var createVoteState = store.getState().createVote;
  var shopDataList = createVoteState.shopDataList;

  var station = createVoteState.station;

  // 駅名の最後に「駅」がなかったら追加
  if(station.slice(-1) !== "駅"){
    station = station + "駅";
  }

  document.getElementById("overlay").style.display = "block";
  await request.post(constant.lambdaFetchIzvote)
    .send({
      station: station,
      offset: shopDataList.length + 1,
    }).then( data => {

      // okが帰ってきたら居酒屋情報をshopdatalistに配列として入れていく
      if(data.body.status === "ok"){
        for(var key in data.body.rest){
          shopDataList.push(data.body.rest[key]);
        }
      }else{
        alert("お店が読み込めませんでした。駅名をご確認ください")
        window.history.back(-1)
      }

    }).catch( err => {
      // TODO 読み込めなかった時、店が見つからなかった時にアラート出して画面戻る
      alert("お店が読み込めませんでした。駅名をご確認ください")
      alert(err);
      console.log(err);
      window.history.back(-1)
    });

  document.getElementById("overlay").style.display = "none";

  return{
    type: FETCH_GNAVI_DESIGNATED,
    shopDataList: shopDataList,
  }
}

// 丸ボタン押した時
// state.designatedidlistに入れていく
export async function addDesignatedIdList(shopId){
  var createVoteState = store.getState().createVote;
  var designatedIdList = createVoteState.designatedIdList;

  // すでにある場合は外す
  if(designatedIdList.indexOf(shopId) >= 0){
    designatedIdList = designatedIdList.filter(n => n !== shopId)
  }
  //ない場合は外す
  else{

    if(designatedIdList.length >= constant.maxDesignatedIdLength){
      alert("選択できる数は最大" + constant.maxDesignatedIdLength + "件までです");
      return{
        type: ADD_DESIGNATED_ID_LIST,
        designatedIdList: designatedIdList,
      }
    }

    designatedIdList.push(shopId);
  }

  return{
    type: ADD_DESIGNATED_ID_LIST,
    designatedIdList: designatedIdList,
  }
}

// 完了して、createVote画面に戻る
export async function finishChoiceIzakaya(){
  return{
    type: FINISH_CHOICE_IZAKAYA,
  }
}
