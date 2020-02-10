function prepareSlideShow(){
    //确保浏览器支持DOM方法
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    //确保元素存在
    if(!document.getElementById('linklist')) return false;
    // if(!document.getElementById('preview')) return false;
    var a = document.createElement('div');
    a.setAttribute('id','slideshow');
    var b = document.createElement('img');
    b.setAttribute('src',"p/naruto.jpg");
    b.setAttribute('alt',"asd");
    b.setAttribute('id',"preview");
    a.appendChild(b);
    var links = document.getElementById('linklist');
    insertAfter(a,links)
    //为图片应用样式
    var preview = document.getElementById('preview');
    console.log(preview)
    preview.style.position = 'absolute';
    //取得列表中的所有链接
    var list = document.getElementById('linklist');
    var links = list.getElementsByTagName('a');
    console.log(links.length);
    // 为nomouseover事件添加动画效果
    for(let i=0;i<links.length;i++){
        console.log(i)
        links[i].onmouseover = function(){
            console.log(i);
            moveMessage("preview",-50*i,0,10);
        }
    }
    // links[0].onmouseover = function(){
    //     moveMessage("preview",0,0,10)
    // }
    // links[1].onmouseover = function(){
    //     moveMessage("preview",-50,0,10)
    // }
    // links[2].onmouseover = function(){
    //     moveMessage("preview",-100,0,10)
    // }
}
addLoadEvent(prepareSlideShow)