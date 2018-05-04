nBind = function(event){
  var elem =document.getElementsByClassName(event.currentTarget.className);
  for(var key in elem){
    elem[key].value=event.currentTarget.value;
  }
};

//This was taken from https://stackoverflow.com/a/15342661/2890522. Kudos to yckart.
//a stands for Attribute. C stands for ParentNode.
//This was replace in 0.0.2 with the querySelectorAll. As we found the polyfill for IE7, it will work out.
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

//Polyfill for IE7. Extracted from https://gist.github.com/connrs/2724353
if (!document.querySelectorAll) {
  document.querySelectorAll = function(selector) {
    var doc = document,
    head = doc.documentElement.firstChild,
    styleTag = doc.createElement('STYLE');
    head.appendChild(styleTag);
    doc.__qsaels = [];

    styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsaels.push(this))}";
    window.scrollBy(0, 0);

    return doc.__qsaels;
  }
}

var rn = rn || {
  bindThis: function(a, b) {
    if (a == null || a == undefined){
      throw new parameterException('Invalid Parameter.', a, 'a');
    }

    
  },
  parameterException: function(message, innerStuff, innerStuffDescription){
   this.message = message;
   this.name = 'ParameterException';
   var logItem = {
    'message' : this.message,
    'name' : this.name,
    'helperURL' : 'https://github.com/Malavos/NiggaJS/issues',
    'innerStuff' : innerStuff,
    'innerStuffDescription':innerStuffDescription
   }
   console.log(logItem);
  }


};
