function displayAbbr(){
    var abbrs = document.getElementsByTagName('abbr');
    // var defs = new Array();
    // for(var i=0;i<abbrs.length;i++){
    //     var key  = abbrs[i].lastChild.nodeValue;
        
    // }
    for(var i=0;i<abbrs.length;i++){
        var body = document.getElementsByTagName('body')[0];
        var dl = document.createElement('dl')
        for(var i=0;i<abbrs.length;i++){
            var a = abbrs[i].lastChild.nodeValue;
            var a_text = document.createTextNode(a);
            var a_div = document.createElement('dt')
            a_div.appendChild(a_text)
            var b = abbrs[i].getAttribute('title');
            var b_text = document.createTextNode(b);
            var b_div = document.createElement('dd')
            b_div.appendChild(b_text);
            dl.appendChild(a_div);
            dl.appendChild(b_div)
        }
        var h2 = document.createElement('h2');
        var h2_text = document.createTextNode('Abbreviations');
        h2.appendChild(h2_text);
        body.appendChild(h2);
        body.appendChild(dl)
    }
}    
addLoadEvent(displayAbbr)