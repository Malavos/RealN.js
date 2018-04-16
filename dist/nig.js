niggaBind = function(event){
    var elem =document.getElementsByClassName(event.currentTarget.className);
    for(var key in elem){
        elem[key].value=event.currentTarget.value;
    }
};

//This was taken from https://stackoverflow.com/a/15342661/2890522. Kudos to yckart.
//a stands for Attribute. C stands 
function getElementsByAttribute(a, c) {
  var nodeList = (context || document).getElementsByTagName('*');
  var nodeArray = [];
  var iterator = 0;
  var node = null;

  while (node = nodeList[iterator++]) {
    if (node.hasAttribute(attribute)) nodeArray.push(node);
  }

  return nodeArray;
}
