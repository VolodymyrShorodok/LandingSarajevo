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



var menu=document.body.getElementsByClassName('menu_icon')[0];
var nav=document.body.getElementsByClassName('menu')[0];
function sizeChange(){
    if (window.innerWidth<=859){
        menu.style.display='block';
        nav.style.display='none';
    }
    else{
        menu.style.display='none';
        nav.style.display='flex';
    }
}
window.onresize=sizeChange;
window.onload=sizeChange;

function toggle(event){
    event.preventDefault();
    if (nav.style.display=='none'){
    nav.style.display='flex';
    }
    else{
    nav.style.display='none';
    }
}
menu.addEventListener('click',toggle,false);