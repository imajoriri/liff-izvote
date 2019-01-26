import liff from "liff";

// 個人情報などが入っているデータ
var liffData;
liff.init( data => {
  liffData = data;
  console.log(data);
},
  err => {
  }
);

export default liff;
export const liffContext = liff._auth.context;

/*
 liff >> liff.openWindow({})とか

 liff._auth: {
  "context":{
    "userId":"U4af498...",
    "type":"group",
    "groupId":"Ca5637c...",
    "viewType":"full"
  }
}
*/

