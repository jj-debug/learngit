// function moveElement(elemID,final_x,final_y,interval){
//     if(!document.getElementById) return false;
//     if(!document.getElementById(elemID))return false;
//     var elem = document.getElementById(elemID);
//     var xpos = parseInt(elem.style.left);
//     var ypos = parseInt(elem.style.top);
//     if(xpos==final_x&&ypos==final_y){
//         return true;
//     }
//     if(xpos<final_x){
//         xpos++
//     }
//     if(xpos>final_x){
//         xpos--
//     }
//     if(ypos<final_y){
//         ypos++
//     }
//     if(ypos>final_y){
//         ypos--
//     }
//     elem.style.left = xpos + 'px'
//     elem.style.top = ypos + 'px'
//     // var repeat = "moveElement('" + elemID+ "'," + final_x + "," + final_y + "," + interval + ")"
//     movement = setTimeout(function () {
//         moveElement(elemID,final_x,final_y,interval)
//     }, interval);
// }
function moveMessage(ele,x,y,interval){
  if(!document.getElementById) return false;
  if(!document.getElementById(ele))return false;
  var elem = document.getElementById(ele);
  console.log(elem);
  //elem.style.left = '100px';
  if(!elem.style.left){
    elem.style.left = "0px";
  }
  if(!elem.style.top){
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  var d = 0
  if(elem.movement){
    clearTimeout(elem.movement)
  }
  if(xpos == x&&ypos ==y){
    return true;
  }
  if(xpos<x){
    // xpos=xpos+1;
    d = Math.ceil((x-xpos)/10);
    xpos = xpos+d;
  }
  if(xpos>x){
    //xpos--;
    d = Math.ceil((xpos-x)/10);
    xpos = xpos-d
  }
  if(ypos<y){
    ypos++;
  }
  if(ypos>y){
    ypos--;
  }
  elem.style.left = xpos + 'px';
  elem.style.top = ypos + 'px';
  var repeat = "moveMessage('" + ele + "'," + x+ "," + y + "," + interval + ")"
  elem.movement = setTimeout(repeat,interval)
}
