function positionMessage(){
    if(!document.getElementById)return false;
    if(!document.getElementById('message'))return false;
    var elem = document.getElementById('message');
    console.log(elem)
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '50px';
    moveMessage("message",125,25,10)
}
addLoadEvent(positionMessage)