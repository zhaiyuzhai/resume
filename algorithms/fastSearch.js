// 冒泡排序
function boubleSort(arr) {
  let length=arr.length;
  for(let i=0;i<length;i++){//首先进行length次的循环，每次将其中的一个值选择出来
    for(let j=0;j<length-1-i;j++){
      if(arr[j]>arr[j+1]){
        let time=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=time;
      }
    }
  }
  return arr;
}

console.log(boubleSort([3,2,1]));