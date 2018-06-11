
function createbar(list){
    console.log(list);
    barcon.innerHTML="";
    var barrect=[];
    for(var i=1;i<list.length;i++){
        // alert(list[i]);
        barrect[i]=document.createElementNS("http://www.w3.org/2000/svg", "rect");
        barrect[i].setAttribute("class","bar");
        barrect[i].setAttribute("x",50*i);
        barrect[i].setAttribute("y",400-list[i].innerHTML);
        barrect[i].setAttribute("width","25");
        barrect[i].setAttribute("height",list[i].innerHTML);
        barrect[i].setAttribute("style","stroke-width:2;opacity:0.7;");
        barcon.appendChild(barrect[i]);

    }
    for(var p in sourceData){
        if(list[1].innerHTML==sourceData[p].sale[0])
        {
            var product=sourceData[p].product;
        }else if(list[0].innerHTML=="地区"){
            product="商品";
        }
    }
    var txt=[];
    for(var x=0;x<12;x++){
        txt[x]=document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt[x].setAttribute("x",50+50*x);
        txt[x].setAttribute("y",420);
        txt[x].innerHTML=Number(x)+1+"月";
        txt[x].setAttribute("style","fill:#EA5D89;stroke-width:2;opacity:0.9;");

        barcon.appendChild(txt[x]);
    }

    var txt2=document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt2.setAttribute("x",50);
    txt2.setAttribute("y",50);
    txt2.innerHTML=product+"-"+list[0].innerHTML+"-"+"十二个月销量柱状图";
    txt2.setAttribute("style","fill:#EA5D89;stroke-width:2;opacity:0.9;font-size:20px;");

    barcon.appendChild(txt2);
}