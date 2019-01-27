import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";
import { firebaseDb } from "./../firebase";

// action
export const FETCH_DB_DATA = "FETCH_DB_DATA";
export const CLICK_IZAKAYA = "CLICK_IZAKAYA";
export const UPDATE_VOTE = "UPDATE_VOTE";
export const OPEN_DETAIL = "OPEN_DETAIL";


// DBからPlanモデルを取得し、そのままstate.planに入れる
// gnaviから居酒屋情報を取得し、state.shopsに入れる
export async function fetchData(planId){
  var plan;

  // firebaseから取得
  await firebaseDb.ref('/plan/' + planId).once('value').then( data => {
    plan = data.val()
  });

  var userId = liffContext.userId;

  var vote = store.getState().toVote.vote;
  await firebaseDb.ref("/vote").child(planId).child(userId).once("value")
    .then( data => {
      if(data.val()){
        vote= Object.keys(data.val()).map( e => {
          return e;
        });
      }
    });

  return {
    type: FETCH_DB_DATA,
    plan: plan,
    planId: planId,
    vote: vote,
  }
}

// 居酒屋のチェックボタンを押した時
// stateのvoteにshopIDを入れる(すでにある場合は外す)
export async function clickIzakaya(shopId){
  var vote = store.getState().toVote.vote;

  // 存在する場合は削除
  if(vote.indexOf(shopId) >= 0){
    vote = vote.filter( id => id !== shopId);
  }else{
    vote.push(shopId);
  }

  return {
    type: CLICK_IZAKAYA,
    vote: vote,
  }
}

// 完了ボタンを押した時
export async function updateVoteData(e){
  var state = store.getState().toVote;
  console.log(state);

  var planId = state.planId;
  var userId = liffContext.userId;

  // 保存するオブジェクト
  var updateVoteData = {};

  for(var i in state.vote){
    updateVoteData[state.vote[i]] = true;
  }

  // loadingを表示する
  document.getElementById("overlay").style.display = "block";

  // 保存。
  await firebaseDb.ref("/vote").child(planId).child(userId).set(updateVoteData)
    .then( data => {

      // 画面を閉じて、メッセージを送る
      liff.sendMessages([
        {
          type:'text',
          text:'投票が完了しました。'
        },
      ]).then(() => {
        // 画面を閉じる
        liff.closeWindow();
      }).catch((err) => {
        alert("正常に作成できませんでした。");
      });

    }).catch( err => {
      console.log("error");
    });

  // loadingを非表示に
  document.getElementById("overlay").style.display = "none";

  return {
    type: UPDATE_VOTE,
  }
}

export async function openDetailPage(url){

  liff.openWindow({
    url: url,
    external: false, // trueならブラウザで開く
  });

  return {
    type: OPEN_DETAIL,
  }
}
