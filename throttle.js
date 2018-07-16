function throttle(context) {
  let isClear=arguments[0],fn;
  if(typeof isClear==='boolean'){//是否立即执行
    fn=arguments[1];
    fn.throttleID && clearTimeout(fn.throttleID);
  }else{
    fn=isClear;
    let param=arguments[1];
    fn.throttleID=setTimeout(function () {
      fn.apply(context,param)
    },500)
  }
}

var id=setTimeout(function () {
  console.log(1)
},3000);
setInterval(function () {
  console.log(id)
},4400)