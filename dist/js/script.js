'use strict'
var works=document.body.getElementsByClassName("works-info-item");

function overWork(){
    var target=event.target;
    if (target=='[object HTMLImageElement]')target.parentNode.children[1].style.zIndex=0;
   
}
function leaveWork(){
    var target=event.target;
    if(target.classList.contains('works-info-itemback')) target.style.zIndex=-1;
}

for (var i=0;i<works.length;i++){
    works[i].addEventListener('mouseover',overWork, false);
    works[i].children[1].addEventListener('mouseleave',leaveWork, false);
}
