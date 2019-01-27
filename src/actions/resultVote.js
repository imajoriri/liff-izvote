import request from 'superagent'

import store from "./../store";
import constant from "./../constant";
import liff, { liffContext } from "./../liff";
import { firebaseDb } from "./../firebase";

// action
export const FETCH_RANKING_DATA = "FETCH_RANKING_DATA";


export async function fetchData(e){
  //alert(JSON.stringify(store.getState()));
  return{
    type: FETCH_RANKING_DATA,
  }
}
 
