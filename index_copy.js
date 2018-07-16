let app={
  util:{},
  store:{}
};

// 工具方法
app.util={
  $:function (selector,node) {
    return (node || document).querySelector(selector)
  },
  formatTime:function (ms) {
    let d=new Date(ms);
    let pad=function (s) {
      if(s.toString().length===1){
        s='0'+s;
      }
      return s;
    };
    let year=d.getFullYear();
    let month=d.getMonth()+1;
    let date=d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    return year + '-' + pad(month) + '-' + pad(date) + ' ' + pad(hour) + ':' + pad(minute) + ':' + pad(second);
  }
};

app.store={
  __store_key:'__sticky_note__',
  get:function () {

  },
  set(){

  },
  remove(){

  },
  getNotes(){

  }
}