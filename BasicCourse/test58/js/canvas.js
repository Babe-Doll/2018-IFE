var canvas=document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    function createcanvas(){
        ctx.fillStyle  = "rgb(153,204,60)";
        ctx.fillRect(0,0,1280,720);
        ctx.beginPath();
        ctx.strokeStyle  = "#fff";
        //总区域
        ctx.strokeRect(80,50,1120,620);
        //罚球区
        ctx.strokeRect(80,160,200,400);
        ctx.strokeRect(1000,160,200,400);
        //球门区
        ctx.strokeRect(80,210,70,300);
        ctx.strokeRect(1130,210,70,300);
        //球框
        ctx.strokeRect(40,270,40,200);
        ctx.strokeRect(1200,270,40,200);
        //罚球踢球那个圆
        ctx.moveTo(280,280);
        ctx.arc(220,360,100,Math.PI/180*(-53),Math.PI/180*(-307),false);
        ctx.moveTo(1000,440);
        ctx.arc(1060,360,100,Math.PI/180*(127),Math.PI/180*(234),false);
        ctx.moveTo(740,360);
        //中圈
        ctx.arc(640,360,100,0,Math.PI*2,false);
        ctx.moveTo(640,50);
        ctx.lineTo(640,670);
        ctx.stroke();
    }
    
    var w = canvas.width;
    var h =canvas.height;

    var box=document.getElementById("box");
    var left=document.getElementById("left");
    var right=document.getElementById("right");
    left.style.display="block";
    var flag=false;
    box.onclick=function(){
        if(flag){
            left.style.display="block";
            right.style.marginLeft="20%";
            right.style.width="80%";
            flag=false;
        }
        else{
            left.style.display="none";
            right.style.marginLeft="0%";
            right.style.width="100%";
            flag=true;
        }
    }
