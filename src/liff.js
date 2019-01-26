import liff from "liff";

// 個人情報などが入っているデータ
var data;
liff.init( data => {
  data = data;
},
  err => {
    // LIFF initialization failed
  }
);

export default liff;
