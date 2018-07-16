// 正规的快速排序法
function swap(array,a,b) {
  [array[a],array[b]]=[array[b],array[a]];//交换两个位置的值
}

function compare(a,b) {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
}

//划分操作的函数
function partition(array,left,right) {
  const pivot=array[Math.floor((right+left)/2)];//取出中间值
  let i=left,
    j=right;
  while(i<=j){
    while (compare(array[i], pivot) === -1) {
      i++;
    }
    while (compare(array[j], pivot) === 1) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(array,left,right) {
  let index;
  if(array.length>1){
    index=partition(array,left,right);//左右指针停止的下标
    if(left<index-1){
      quick(array,left,index-1);//index-1尤为重要，因为上面的left先动的
    }
    if(index<right){
      quick(array,index,right);//内部再分治
    }
  }
  return array;
}

// 主入口函数
function quickSort(array) {
  return quick(array,0,array.length-1);//从下标为0的地方开始
}
let arr=Array.from(new Array(1000).keys()).reverse();
console.time('quickSort');
console.log(quickSort(arr));
console.timeEnd('quickSort');