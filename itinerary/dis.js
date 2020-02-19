function displayAbbreviations() {
    //取得所有缩写
      var abbr = document.getElementsByTagName("abbr");
    //判断是否有abbr标签
      if (abbr.length < 1) return false;
    //创建以一个空数组
      var defs = new Array();
    //遍历所有缩写
      for (var i = 0; i < abbr.length; i++) {
        var ti = abbr[i].getAttribute("title");
        var key = abbr[i].lastChild.nodeValue;
    //  console.log(defs[key]);
    //  console.log(key)
    //defs数组key属性值为ti
        defs[key] = ti;
      }
    //创建定义列表
      var dl = document.createElement("dl");
    // 循环数组
      for (key in defs) {
        var abc = defs[key];
        var dt = document.createElement("dt");
        var dt_text = document.createTextNode(key);
        dt.appendChild(dt_text);
        dl.appendChild(dt);
        console.log(dt);
        var dd = document.createElement("dd");
        var dd_text = document.createTextNode(abc);
        dd.appendChild(dd_text);
        dl.appendChild(dd);
        console.log(dd);
      }
      var h2 = document.createElement("h2");
      var h2_text = document.createTextNode("Abbreviations");
      h2.appendChild(h2_text);
      document.body.appendChild(h2);
      document.body.appendChild(dl);
    }
    addLoadEvent(displayAbbreviations);
    