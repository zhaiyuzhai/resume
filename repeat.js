function repeat(str,n) {
  return new Array(n+1).join(str)
}
console.log(repeat('123',3));
function repeat2(str,n) {
  if(arguments.length<2){
    throw TypeError('repeat needs two arguments');
  }
  if(n<0 || n>Number.MAX_VALUE){
    throw RangeError('n must be 0~正无穷');
  }
  let result='';
  for(let i=0;i<n;i++){
    result+=str;
  }
  return result
}
console.log(repeat2('abc',3));

String.prototype.trim=function(){
  console.log(this)
  return this.replace(/(^\s*)|(\s*$)/g,'');
}
let str='  sss  ';
console.log(str.trim())