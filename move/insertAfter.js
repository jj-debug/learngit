function insertAfter(newE,tar){
    var parent = tar.parentNode;
    if(parent.lastChild==tar){
        parent.appendChild(newE)
    }else{
        var a = tar.nextSilbing;
        parent.insertBefore(newE,a)
    }
}