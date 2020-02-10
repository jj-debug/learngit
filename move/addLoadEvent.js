function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload!='function'){
        window.onload = func
    }else{
        window.onload =function(){
            oldonload();
            func()
        }
    }
}