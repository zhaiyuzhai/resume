/*snabbdom：
*按类型diff
*按列表diff
* */
function isArray(arr) {
  return Object.prototype.toString.call(arr).slice(8,-1)==='Array';
}
function each(arr,cb) {
  for(let i=0,len=arr.length;i<len;i++){
    cb(arr[i],i)
  }
}
function setAttr(el,propName,propValue) {
  el.setAttribute(propName,propValue);
}
function isString() {
  return Object.prototype.toString.call(arr).slice(8,-1)==='String';
}

let VElement=function (tagName,props,children) {
  if(!this instanceof VElement){
    return new VElement(tagName,props,children)
  }
  if(isArray(props)){
    children=props;
    props={};
  }
  // 设置虚拟dom相关的属性
  this.tagName=tagName;
  this.props=props || {};
  this.children=children || [];
  this.key=props?props.key:void 666;
  let count=0;
  each(this.children,function (child,index) {
    if(child instanceof VElement){
      count+=child.count;
    }else {
      children[i]=''+child;//倘若不是ve实例的话，强行转换成字符串;
    }
    count++
  });
  this.count=count;
};

VElement.prototype.render=function () {
  let el=document.createElement(this.tagName);
  let props=this.props;
  for(let propName in props){
    if(props.hasOwnProperty(propName)){
      setAttr(el,propName,props[propName]);
    }
  }
  each(this.children,function (child,index) {
    let childEl=(child instanceof VElement)?child.render():document.createTextNode(child);
    el.appendChild(childEl);
  });
  return el;
};

function diff(oldTree,newTree) {
  let index=0;
  let patches={};
  dfsWalk(oldTree,newTree,index,patches);//深度优先遍历两棵树
  return patches;
}

function dfsWalk(oldNode,newNode,index,patches) {
  let currentPatch=[];
  if(newNode==null){
    //依赖listdiff算法进行标记删除
  }else if(isString(oldNode) && isString(newNode)){
    if(oldNode !==newNode){
      currentPatch.push({
        type:patch.Text,
        content:newNode
      });
    }
  }else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    //节点类型相同
    //比较节点的属性是否相同
    let propsPatches = diffProps(oldNode, newNode);
    if (propsPatches) {
      currentPatch.push({
        type: patch.PROPS,
        props: propsPatches
      });
    }
    //比较子节点是否相同
    diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);
  }else{
    currentPatch.push({ type: patch.REPLACE, node: newNode });
  }
}