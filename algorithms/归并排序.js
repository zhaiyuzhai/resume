function sortArray(array) {
  let length=array.length;
  if(length===1){
    return array;
  }
  let mid=Math.floor(length/2),
    left=array.slice(0,mid),
    right=array.slice(mid,length);
  return merge(sortArray(left),sortArray(right));
}
function merge(left,right) {
  let result=[],
    il=0,
    ir=0;
  while(il<left.length && ir<right.length){
    if(left[il]<right[ir]){
      result.push(left[il++]);
    }else{
      result.push(right[ir++]);
    }
  }
  // 当一组完成操作后，再进行检查
  while(il<left.length){
    result.push(left[il++]);
  }
  while(ir<right.length){
    result.push(right[ir++])
  }
  return result;
}
let arr=Array.from(new Array(1000).keys()).reverse();
console.time('归并排序');
console.log(sortArray(arr));
console.timeEnd('归并排序');