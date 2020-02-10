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

function insertAfter(n,targrt){
  var parent = targrt.parentNode;
  if(targrt==parent.lastChild){
    parent.appendChild(n);
  }else{
    parent.insertBefore(n,targrt.nextSiblong);
  }
}

function preparePlaceholder(){
  var img = document.createElement('img');
  img.setAttribute("id",'placeholder');
  img.setAttribute("src",'images/longmao.jpg');
  img.setAttribute("alt",'image');
  img.setAttribute("width",'500px');
  img.setAttribute("height",'500px');
  var p = document.createElement('p');
  p.setAttribute('id','description');
  var t = document.createTextNode('Choose an image.')
  p.appendChild(t);
  img.classList.add('img');
  var b = document.getElementsByTagName('body')[0];
  b.appendChild(img);
  b.appendChild(p);
  var gallery = document.getElementById('imagegallery');
  var description = document.getElementById('description');
  insertAfter(gallery,description);
}

function before(){
  var gallery = document.getElementById('imagegallery');
  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');
  gallery.parentNode.insertBefore(placeholder,gallery);
  gallery.parentNode.insertBefore(description,gallery); 
}



function after(){
  var gallery = document.getElementById('imagegallery');
  var description = document.getElementById('description');
  insertAfter(gallery,description);
}

window.onload = function(){
  prepareGallery();
  preparePlaceholder();
  //before();
}
