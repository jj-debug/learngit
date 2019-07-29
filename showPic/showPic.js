function showPic(whichpic){
  if(!document.getElementById('placeholder'))return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById('placeholder');
  placeholder.setAttribute("src",source);
  if(!document.getElementById('description'))return false;
  if(whichpic.getAttribute('title')){
    var text = whichpic.getAttribute('title');
  }else{
    var text ="";
  }
  var description = document.getElementById('description');
  console.log(description.firstChild);
  description.firstChild.nodeValue = text;
  // description.innerHTML('text');
}

function countBodyChildren(){
  var body_element = document.getElementsByTagName('body')[0];
  alert(body_element.nodeType);
}  

function prepareGallery(){
  if(!document.getElementById('imagegallery')) return false;
  var gallery = document.getElementById('imagegallery');
  var a = gallery.getElementsByTagName('a');
  for(var i=0;i<a.length;i++){
    a[i].onclick=function(){
      showPic(this);
      return false;
    }
  } 
}
window.onload = prepareGallery;

