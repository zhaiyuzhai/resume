function quickSort(array) {
  return quick(array,0,array.length-1);
}

function swap(array,a,b) {
  [array[a],array[b]]=[array[b],array[a]]
}

function quick(array,left,right) {
  let pivot=array[left];//默认选取第一个值当做比较值
  let i,j;
  i=left+1;
  j=right;
  if(right>left){
    while(i!==j){
      // 只要i和j是不相等的就开始遍历
      while(array[j]>=pivot && i<j){
        j--
      }
      void j;
      while (array[i]<=pivot && i<j){
        i++
      }
      if(i<j){
        swap(array,i,j);
      }
    }
    /*全部完成后，会造成i===j
    此时将选定的目标值和当前的i所指定的下标交换*/
    swap(array,left,i);
    quick(array,left,i-1);
    quick(array,i+1,right)
  }
  return array
}

let arr=Array.from(new Array(1000).keys()).reverse();
console.time('fast');
console.log(quickSort(arr));
console.timeEnd('fast');

