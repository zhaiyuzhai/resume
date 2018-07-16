function handleEventEntrust(node) {
  node=node || document.querySelector(node);
  node.onclick=ev=>{
    ev=ev || window.event;
    let target=ev.target || ev.srcElement;
    switch (target.nodeName.toLowerCase()){
      case 'div':
        break;
    }
  }
}

Array.prototype.map=function (callbackFunton) {
  let context=Object.prototype.toString.call(this).slice(8,-1)==='Array'? this : [this];//容错处理
  let length=context.length;
  let currentArray=[];
  for(let i=0;i<length;i++){
     currentArray.push(callbackFunton(context[i],i,context));
  }
  return currentArray;
};
let newArray=[1,2,3].map((value)=>{
  return value+1;
});
console.log(newArray);

