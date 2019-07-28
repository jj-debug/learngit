function popUp(winURL){
  console.log(winURL)
  window.open(winURL,"aaaaaa","width=300,height=300")
}

window.onload=function(){
  var a =document.getElementsByTagName('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].getAttribute('class')=="search") {
      a[i].onclick=function(e){
        popUp(this.getAttribute('href'));
        return false;
      }  
    }
  }
}