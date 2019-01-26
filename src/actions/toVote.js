import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";
import { firebaseDb } from "./../firebase";

// action
export const FETCH_DB_DATA = "FETCH_DB_DATA";
export const FETCH_SHOPS = "FETCH_SHOPS";


// DBからPlanモデルを取得し、そのままstate.planに入れる
// gnaviから居酒屋情報を取得し、state.shopsに入れる
export async function fetchData(planId){
  var plan;

  // firebaseから取得
  await firebaseDb.ref('/plan/' + planId).once('value').then( data => {
    plan = data.val()
  });
  console.log(plan);

  // ぐるなびから取得
  //await request
  //  .get(constant.gnavi.searchURL)
  //  .query({
  //    keyid: constant.gnavi.apiKey,
  //  })
  //  .then( data => {
  //    console.log(data);
  //    //resStatus = data.body.status;
  //  }).catch( err => {
  //    //resStatus = "err";
  //  });

  return {
    type: FETCH_DB_DATA,
    plan: plan,
  }
}

