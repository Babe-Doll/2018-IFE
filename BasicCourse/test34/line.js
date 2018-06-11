function createline(list){
    var line2= document.getElementById("line");
    line2.parentNode.removeChild(line2);
    for(var p in sourceData){
        if(list[1].innerHTML==sourceData[p].sale[0])
        {
            var product=sourceData[p].product;
        }else if(list[0].innerHTML=="地区"){
            product="商品";
        }
    }
    var line = document.createElement('canvas');

    line.id   = "line";
    line.width  =650;
    line.height = 430;
    canvas.appendChild(line);
    var xy=line.getContext("2d");
    xy.beginPath();
    xy.moveTo(30,0);
    xy.lineTo(30,400);
    xy.lineTo(650,400);
    xy.lineWidth = 2;
    xy.strokeStyle = 'rgb(174,138,149,0.5)';
    xy.stroke();
    var lin=line.getContext("2d");
    lin.beginPath();
    for(var i=1;i<list.length;i++){
        lin.lineTo(50*i,400-list[i].innerHTML);
    }
    lin.strokeStyle="rgb(238,114,153,0.7)";
    lin.lineWidth = 2;
    lin.stroke();
    var lin2=line.getContext("2d");
    lin2.beginPath();
    lin2.strokeStyle = 'rgb(234,93,137,0.1)';
    lin2.moveTo(30,100);
    lin2.lineTo(650,100);

    lin2.stroke();
    lin2.beginPath();
    lin2.moveTo(30,200);
    lin2.lineTo(650,200);

    lin2.stroke();
    lin2.beginPath();
    lin2.moveTo(30,300);
    lin2.lineTo(650,300);


    lin2.stroke();
    for(var i=1;i<list.length;i++){
        var circle=line.getContext("2d");
        circle.beginPath();
        circle.arc(50*i,400-list[i].innerHTML, 2, 0, 2 * Math.PI);
        circle.fillStyle="rgb(209,26,84)"
        circle.strokeStyle="rgb(209,26,84,0.7)";
        circle.fill();
        circle.stroke();

    }
    var text=line.getContext("2d");
    text.beginPath();
    text.font = "16px times";
    for(var x=0;x<12;x++){

        text.strokeText(Number(x)+1+"月",50+50*x,420);
        text.strokeStyle="rgb(209,26,84,0.7)";
        text.font = "16px times";
        text.stroke();
    }
    text.beginPath();
    text.strokeText(300,0,100);
    text.strokeText(200,0,200);
    text.strokeText(100,0,300);

    text.font = "20px Arial";
    text.stroke();

    text.beginPath();
    text.strokeText(product+"-"+list[0].innerHTML+"-"+"十二个月销量折线图",50,50);
    text.strokeStyle="rgb(209,26,84,0.7)";
    // text.fill();

    text.stroke();
}