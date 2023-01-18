function history_store()
    {
        var last = document.getElementById("last");
        tmp = document.getElementById("text").value;
        var li = document.createElement("li");  //创建一个li
        li.setAttribute("id","last");
        var node = document.createTextNode(tmp);    //创建一个文本结点
        li.appendChild(node);   //把文本结点加到li中
        var element = document.getElementById("divhis");    //得到已知元素
        element.insertBefore(li,last);
    }

function display_note(value)
{
    if(value=="gene")
    {
        document.getElementById("note").innerHTML='';   //删除之前的元素
        var h3 = document.createElement("h3");  //创建一个h3
        var li = document.createElement("li");
        h3.className = "noteh3"
        li.className = "noteli"
        var node1 = document.createTextNode("Note:");    //创建一个文本结点
        var node2 = document.createTextNode("Please input a gene name");
        h3.appendChild(node1);   //把文本结点加到li中
        li.appendChild(node2);
        var element = document.getElementById("note");    //得到已知元素
        element.appendChild(h3);    //把li加到已知元素中
        element.appendChild(li);
    }
    if(value=="disease")
    {
        document.getElementById("note").innerHTML='';   //删除之前的元素
        var h3 = document.createElement("h3");  //创建一个h3
        var li = document.createElement("li");
        h3.className = "noteh3"
        li.className = "noteli"
        var node1 = document.createTextNode("Note:");    //创建一个文本结点
        var node2 = document.createTextNode("Please input a disease name");
        h3.appendChild(node1);   //把文本结点加到li中
        li.appendChild(node2);
        var element = document.getElementById("note");    //得到已知元素
        element.appendChild(h3);    //把li加到已知元素中
        element.appendChild(li);
    }
    if(value=="metabolite")
    {
        document.getElementById("note").innerHTML='';   //删除之前的元素
        var h3 = document.createElement("h3");  //创建一个h3
        var li = document.createElement("li");
        h3.className = "noteh3"
        li.className = "noteli"
        var node1 = document.createTextNode("Note:");    //创建一个文本结点
        var node2 = document.createTextNode("Please input a metabolite id");
        h3.appendChild(node1);   //把文本结点加到li中
        li.appendChild(node2);
        var element = document.getElementById("note");    //得到已知元素
        element.appendChild(h3);    //把li加到已知元素中
        element.appendChild(li);
    }
    if(value=="pathway")
    {
        document.getElementById("note").innerHTML='';   //删除之前的元素
        var h3 = document.createElement("h3");  //创建一个h3
        var li = document.createElement("li");
        h3.className = "noteh3"
        li.className = "noteli"
        var node1 = document.createTextNode("Note:");    //创建一个文本结点
        var node2 = document.createTextNode("Please input a disease name");
        h3.appendChild(node1);   //把文本结点加到li中
        li.appendChild(node2);
        var element = document.getElementById("note");    //得到已知元素
        element.appendChild(h3);    //把li加到已知元素中
        element.appendChild(li);
    }
}

function display_disease()
{
    document.getElementById("content").innerHTML='';
    document.getElementById("error").innerHTML='';
    if(document.getElementById("disease").checked)
    {
        var x = document.getElementById("text").value;
        var tt='http://127.0.0.1:8000/dis/?d_name='+x;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', tt);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var data = (xhr.response);
                    //data = JSON.stringify(data);
                    //alert(data);
                    data = JSON.parse(JSON.parse(data));
                    //alert(data);
                    //data = JSON.parse(data);
                    //alert(data.flag.length);

                    // EXTRACT VALUE FOR HTML HEADER.
                    var col = ["Gene","Metabolite","Reaction","Marker"];
                    var gl = data.gene.length;
                    var ml = data.meta.length;
                    var rl = data.rea.length;
                    var sum = gl + ml + rl;
                    var l = Math.max(gl,Math.max(ml,gl));
                    //alert(ml);
                    /*for (var i = 0; i < data.length; i++) {
                        for (var key in data[i]) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }*/
                    

                    if(l==0)
                    {
                        document.getElementById("error").innerHTML='Oops, nothing was found...';
                    }
                    // CREATE DYNAMIC TABLE.
                    else{

                    document.getElementById("error").innerHTML=sum+' piece(s) data was found!';
                    var table = document.createElement("table");

                    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                    var tr = table.insertRow(-1);                   // TABLE ROW.

                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th");      // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }

                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < l; i++) {

                        tr = table.insertRow(-1);
                        if(i < gl)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.gene[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }

                        if(i < ml)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.meta[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        if(i < rl)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.rea[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        if(i < 1)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.flag;
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        /*for (var j = 0; j < col.length; j++) {
                            //var tabCell = tr.insertCell(-1);
                            //tabCell.innerHTML = data[i][col[j]];
                        }*/
                    }

                    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                    var divContainer = document.getElementById("content");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                }}


            }
        }
    }
}

function display_metabolite()
{
    document.getElementById("content").innerHTML='';
    document.getElementById("error").innerHTML='';
    if(document.getElementById("metabolite").checked)
    {
        var x = document.getElementById("text").value;
        var tt='http://127.0.0.1:8000/meta/?m_id='+x;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', tt);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var data = (xhr.response);
                    //data = JSON.stringify(data);
                    //alert(data);
                    data = JSON.parse(JSON.parse(data));
                    //alert(data);
                    //data = JSON.parse(data);
                    //alert(data.flag.length);

                    // EXTRACT VALUE FOR HTML HEADER.
                    var col = ["Disease","Gene","Reaction","KEGG"];
                    var l1 = data.dis.length;
                    var l2 = data.gene.length;
                    var l3 = data.rea.length;
                    var l4 = data.kegg.length;
                    var sum = l1 + l2 + l3 + l4;
                    var l = Math.max(Math.max(l1,l2),Math.max(l3,l4));
                    //alert(ml);
                    /*for (var i = 0; i < data.length; i++) {
                        for (var key in data[i]) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }*/
                    if(l==0)
                    {
                        document.getElementById("error").innerHTML='Oops, nothing was found...';
                    }
                    // CREATE DYNAMIC TABLE.
                    else{

                    document.getElementById("error").innerHTML=sum+' piece(s) data was found!';
                    var table = document.createElement("table");

                    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                    var tr = table.insertRow(-1);                   // TABLE ROW.

                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th");      // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }

                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < l; i++) {

                        tr = table.insertRow(-1);
                        if(i < l1)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.dis[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }

                        if(i < l2)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.gene[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        if(i < l3)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.rea[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        if(i < l4)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.kegg[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        /*for (var j = 0; j < col.length; j++) {
                            //var tabCell = tr.insertCell(-1);
                            //tabCell.innerHTML = data[i][col[j]];
                        }*/
                    }

                    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                    var divContainer = document.getElementById("content");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                }}


            }
        }
    }
}

function display_gene()
{
    document.getElementById("content").innerHTML='';
    document.getElementById("error").innerHTML='';
    if(document.getElementById("gene").checked)
    {
        var x = document.getElementById("text").value;
        var tt='http://127.0.0.1:8000/gene/?g_name='+x;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', tt);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var data = (xhr.response);
                    //data = JSON.stringify(data);
                    //alert(data);
                    data = JSON.parse(JSON.parse(data));
                    //alert(data);
                    //data = JSON.parse(data);
                    //alert(data.flag.length);

                    // EXTRACT VALUE FOR HTML HEADER.
                    var col = ["Disease","Metabolism","Reaction"];
                    var l1 = data.dis.length;
                    var l2 = data.meta.length;
                    var l3 = data.rea.length;
                    var sum = l1 + l2 + l3;
                    var l = Math.max(Math.max(l1,l2),l3);
                    //alert(ml);
                    /*for (var i = 0; i < data.length; i++) {
                        for (var key in data[i]) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }*/
                    if(l==0)
                    {
                        document.getElementById("error").innerHTML='Oops, nothing was found...';
                    }
                    // CREATE DYNAMIC TABLE.
                    else{

                    document.getElementById("error").innerHTML=sum+' piece(s) data was found!';
                    var table = document.createElement("table");

                    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                    var tr = table.insertRow(-1);                   // TABLE ROW.

                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th");      // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }

                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < l; i++) {

                        tr = table.insertRow(-1);
                        if(i < l1)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.dis[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }

                        if(i < l2)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.meta[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        if(i < l3)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.rea[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }

                        /*for (var j = 0; j < col.length; j++) {
                            //var tabCell = tr.insertCell(-1);
                            //tabCell.innerHTML = data[i][col[j]];
                        }*/
                    }

                    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                    var divContainer = document.getElementById("content");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                }}


            }
        }
    }
}

function diff()
{
    document.getElementById("content").innerHTML='';
    document.getElementById("error").innerHTML='';
        var tt='http://127.0.0.1:8000/diff';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', tt);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    var data = (xhr.response);
                    //data = JSON.stringify(data);
                    //alert(data);
                    data = JSON.parse(JSON.parse(data));
                    //alert(data);
                    //data = JSON.parse(data);
                    //alert(data.flag.length);

                    // EXTRACT VALUE FOR HTML HEADER.
                    var col = ["Metabolite"];
                    var l1 = data.diff.length;
                    //alert(ml);
                    /*for (var i = 0; i < data.length; i++) {
                        for (var key in data[i]) {
                            if (col.indexOf(key) === -1) {
                                col.push(key);
                            }
                        }
                    }*/
                    if(l1==0)
                    {
                        document.getElementById("error").innerHTML='Oops, nothing was found...';
                    }
                    // CREATE DYNAMIC TABLE.
                    else{

                    document.getElementById("error").innerHTML=l1+' piece(s) data was found!';
                    var table = document.createElement("table");

                    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

                    var tr = table.insertRow(-1);                   // TABLE ROW.

                    for (var i = 0; i < col.length; i++) {
                        var th = document.createElement("th");      // TABLE HEADER.
                        th.innerHTML = col[i];
                        tr.appendChild(th);
                    }

                    // ADD JSON DATA TO THE TABLE AS ROWS.
                    for (var i = 0; i < l1; i++) {

                        tr = table.insertRow(-1);
                        if(i < l1)
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = data.diff[i];
                            tr.appendChild(th);
                        }
                        else
                        {
                            var th = document.createElement("th");      // TABLE HEADER.
                            th.innerHTML = ' ';
                            tr.appendChild(th);
                        }
                        /*for (var j = 0; j < col.length; j++) {
                            //var tabCell = tr.insertCell(-1);
                            //tabCell.innerHTML = data[i][col[j]];
                        }*/
                    }

                    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
                    var divContainer = document.getElementById("content");
                    divContainer.innerHTML = "";
                    divContainer.appendChild(table);
                }}


            }
        }
    }
