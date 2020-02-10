function addLoadEvent(func){
    var old = window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            old();
            func();
        }
    }
}
function insertAfter(newE,tar){
    var p = tar.parentNode;
    if(p.lastChild==tar){
        tar.appendChild(newE)
    }else{
        p.insertBefore(newE,tar.nextSibling)
    }
}
function addClass(element,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+=' ';
        newClassName+=value;
        element.className=newClassName;
    }
}
function highlightPage(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    var headers = document.getElementsByTagName('header');
    if(headers.length=0)return false;
    var navs = headers[0].getElementsByTagName('nav');
    if(navs.length=0)return false;
    var links = navs[0].getElementsByTagName('a');
    console.log(links)
    var linkurl;
    for(var i=0;i<links.length;i++){
        linkurl = links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl)!=-1){
            links[i].className = 'here';
            console.log(links[0].className);
            var linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id',linktext);
        }
    }
}
addLoadEvent(highlightPage)

function moveElement(elementID,final_x,final_y,interval){
    if(!document.getElementById)return false;
    if(!document.getElementById(elementID))return false;
    var elem = document.getElementById(elementID);
    console.log(elem)
    if(!elem.style.top){
        elem.style.top='0px';
    }
    if(!elem.style.left){
        elem.style.left='0px'
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var d = 0
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    console.log(xpos);
    console.log(final_x)
    if(xpos == final_x&&ypos == final_y){
        return true;
    }
    if(xpos<final_x){
        d = Math.ceil((final_x-xpos)/10)
        console.log(d)
        xpos = xpos+d;
    }
    if(xpos>final_x){
        d = Math.ceil((xpos-final_x)/10)
        xpos = xpos-d;
    }
    if(ypos<final_y){
        ypos++;
      }
      if(ypos>final_y){
        ypos--;
      }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x+ "," + final_y + "," + interval + ")"
    elem.movement = setTimeout(repeat,interval);
}
function prepareSildeshow(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById('intro'))return false;
    var intro = document.getElementById('intro');
    var sildeshow = document.createElement('div');
    sildeshow.setAttribute('id','sildeshow');
    var preview = document.createElement('img');
    preview.setAttribute('src','images/slideshow.jpg')
    preview.setAttribute('alt','qi wu hai');
    preview.setAttribute('id','preview');
    sildeshow.appendChild(preview);
    insertAfter(sildeshow,intro);
}
addLoadEvent(prepareSildeshow)

var links = document.getElementsByTagName('a');
var destination;
for(var i=0;i<links.length;i++){
    links[i].onmouseover = function(){
        destination = this.getAttribute('href');
        if(destination.indexOf('index.html')!=-1){
            moveElement('preview',0,0,5);
        }
        if(destination.indexOf('about.html')!=-1){
            moveElement('preview',-94,0,5);
        }
        if(destination.indexOf('photos.html')!=-1){
            moveElement('preview',-188,0,5);
        }
        if(destination.indexOf('live.html')!=-1){
            moveElement('preview',-282,0,5);
        }
        if(destination.indexOf('contact.html')!=-1){
            moveElement('preview',-376,0,5);
        }
    }
}
function showSection(id){
    var sections = document.getElementsByTagName('section');
    for(var i=0;i<sections.length;i++){
        if(sections[i].getAttribute('id')==id){
            sections[i].style.display = 'block';
        }else{
            sections[i].style.display = 'none';
        }
    }
}
function prepareInternalnav(){
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById)return false;
    var articles = document.getElementsByTagName('article');
    if(articles.length==0)return false;
    var navs = articles[0].getElementsByTagName('nav');
    if(navs.length==0)return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
        let sectionId = links[i].getAttribute('href').split('#')[1];
        document.getElementById(sectionId).style.display = 'none';
        // links[i].ele = sectionId
        links[i].onclick=function(){
            showSection(sectionId);
            return false;
        }
    }
}
addLoadEvent(prepareInternalnav)

function preparePlaceholder(){
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById('imagegallery'))return false;
    var placeholder = document.createElement('img');
    placeholder.setAttribute('src','images/photos/lf.jpg');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('alt','my image gallery');
    var p = document.createElement('p');
    p.setAttribute('id','p');
    var p_text = document.createTextNode('Choose an image');
    p.appendChild(p_text);
    var imagegallery = document.getElementById('imagegallery');
    insertAfter(p,imagegallery);
    insertAfter(placeholder,p)
}
addLoadEvent(preparePlaceholder);

function showPic(pic){
    if(!document.getElementById('placeholder'))return false;
    var placeholder = document.getElementById('placeholder');
    var s = pic.getAttribute('href');
    placeholder.setAttribute('src',s);
    return false;
}
function prepareGallery(){
    if(!document.getElementById)return false;
    if(!document.getElementById('imagegallery'))return false;
    if(!document.getElementsByTagName)return false;
    var imagegallery = document.getElementById('imagegallery');
    var a = imagegallery.getElementsByTagName('a');
    for(var i=0;i<a.length;i++){
        a[i].onclick=function(){
            return showPic(this);
        }
    }
}
addLoadEvent(prepareGallery)

function stripeTables(){
    var tables =  document.getElementsByTagName('table');
    var o = false;
    for(var i=0;i<tables.length;i++){
        var rows = tables[i].getElementsByTagName('tr');
        for(var j=0;j<rows.length;j++){
            if(o==true){
                addClass(rows[j],'odd');
                var o = false;
            }else{
                var o =true;
            }
        }
    }
}
addLoadEvent(stripeTables)

function highlightRows(){
    var rows = document.getElementsByTagName('tr');
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function(){
            addClass(this,'highlight');
        }
        rows[i].onmouseout = function(){
            this.className = this.oldClassName;
        }
    }
}
addLoadEvent(highlightRows);

function displayAbbreviations(){
    var abbreviation = document.getElementsByTagName('abbr');
    if(abbreviation.length<1)return false;
    var defs = new Array;
    for(var i=0;i<abbreviation.length;i++){
        var key = abbreviation[i].lastChild.nodeValue;
        var definition = abbreviation[i].getAttribute('title')
        defs[key] = definition;
    }
    var dlist = document.createElement('dl')
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header = document.createElement('h3');
    var header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    var articles = document.getElementsByTagName('article');
    articles[0].appendChild(header);
    articles[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviations);

function focusLabels(){
    if(!document.getElementsByTagName)return false;
    var labels = document.getElementsByTagName('label');
    for(var i=0;i<labels.length;i++){
        if(!labels[i].getAttribute('for'))continue;
        labels[i].onclick = function(){
            console.log(this.getAttribute('for'));
            var id = this.getAttribute('for');
            if(!document.getElementById(id)) return false;
            var elem = document.getElementById(id);
            elem.focus()
        }
    }
}
addLoadEvent(focusLabels);

function resetFields(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var element = whichform.elements[i];
        if(element.type == 'submit') continue;
        var a = element.getAttribute('placeholder');
        if(!a) continue;
        element.onfocus = function(){
            var text = this.getAttribute('palceholser');
            if(this.value==text){
                this.className='';
                this.value='';
            }
        }
        element.onblur = function(){
            if(this.value==''){
                this.className='placeholder'
                this.value = this.getAttribute('palceholser');
            }
        }
    }
}
function prepareForms(){
    for(var i=0;i<document.forms.length;i++){
        var thisform = document.forms[i];
        resetFields(thisform);
        thisform.onsubmit = function(){
            return validateForm(this);
        }
    }
}
addLoadEvent(prepareForms)

function isFilled(field){
    if(field.value.replace(' ','').length ==0)return false;
    var placeholder = field.placeholder||field.getAttribute('placeholder');
    return(field.value != placeholder);
}
function isEmail(field){
    return(field.value.indexOf('@') !=-1 &&field.value.indexOf('.') !=-1);
}
function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var element = whichform.elements[i];
        console.log(1)
        if(element.required == 'required'){
            if(!isFilled(element)){
                alert("Please fill in the "+element.name+" field.");
                return false;
            }
        }
        if(element.type == 'eamil'){
            if(!isEmail(element)){
                alert("The "+element.name+" field must be a valid email address.");
                return false;
            }
        }
    }
    return true;
}

