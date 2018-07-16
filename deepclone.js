function isArray(arr) {
  return Object.prototype.toString.call(arr)==='[object Array]';
}
function deepclone(obj) {
  if(typeof obj!=='object' && typeof obj!=='function'){
    return obj;
  }
  let o=isArray(obj)?[]:{};
  for(let i in obj){
    if(obj.hasOwnProperty(i)){
      o[i]=typeof obj[i]==='object'?deepclone(obj[i]):obj[i]
    }
  }
  return o;
}