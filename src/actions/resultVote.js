import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";
import { firebaseDb } from "./../firebase";

// action
export const FETCH_RANKING_DATA = "FETCH_RANKING_DATA";

// データを取得してランキング順に並べる
export async function fetchData(e){
  // userリスト
  var users = [];

  // toVoteのstateからplanIdを取得
  var toVoteState = store.getState().toVote;
  var planId = toVoteState.planId;
  var plan = toVoteState.plan;

  // stateに保存するようにオブジェクトを作成して入れていく{ shopId: 1(count) }
  var allUserVotes = {};

  // dbからデータを取得
  await firebaseDb.ref("/vote/").child(planId).once("value", data => {

    // alluservotesに全員の投票をいれていく
    var usersData = data.val(); // このプランのユーザー全員のデータ。keyはuserId
    var perUserData; // 一人の人の投票データ。keyはshopId

    for(var usersDataKey in usersData){
      users.push(usersDataKey);

      perUserData = usersData[usersDataKey];

      // perUsersDataKeyはshopIdである
      for(var perUsersDataKey in perUserData){
        if(allUserVotes[perUsersDataKey]){
          allUserVotes[perUsersDataKey] = allUserVotes[perUsersDataKey] + 1;
        }else{
          allUserVotes[perUsersDataKey] = 1;
        }
      }
    }
    

  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  return{
    type: FETCH_RANKING_DATA,
    users: users,
    plan: plan,
    planId: planId, 
    allUserVotes: allUserVotes,
  }
}
 
