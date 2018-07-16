function delegate(parent,selector,handle) {
  if(!parent.tagName){
    return
  }
  let node=selector.tagName?selector:document.querySelector(selector);
  let addEvent=parent.addEventListener?parent.addEventListener:parent.attachEvent;
  addEvent.call(node,'click',function (e) {
    if(e.target.nodeName===node.tagName){
      handle.call(parent,e);
    }
  })
}