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
        var node2 = document.createTextNode("Please input a metabolite name");
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