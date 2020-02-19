function addLoadEvent(func){
    var old = window.onload;
    if(typeof old!='function'){
        window.onload = func;
    }else{
        window.onload=function(){
            old();
            func();
        }
    }
}