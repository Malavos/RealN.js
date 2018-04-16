
niggaBind=function(event){
var elem =document.getElementsByClassName(event.currentTarget.className);
for(var key in elem){
    elem[key].value=event.currentTarget.value;
}
}
