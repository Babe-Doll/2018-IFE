/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-11 10:55:55
 * @version $Id$
 */
 var endutime = document.getElementById("endu").value;
 var explotime =document.getElementById("explo").value;
 var strength =document.getElementById("stre").value;
 var skill =document.getElementById("skill").value;

 //求正态分布的值
function getNumber(mean,stddev){
    return mean+(randomNumber()*stddev) ;
}

function randomNumber(){
    var u=0.0, v=0.0, w=0.0, c=0.0;
    do{
        //获得两个（-1,1）的独立随机变量
        u=Math.random()*2-1.0;
        v=Math.random()*2-1.0;
        w=u*u+v*v;
    }while(w==0.0||w>=1.0)
    //这里就是 Box-Muller转换
    c=Math.sqrt((-2*Math.log(w))/w);
    //返回2个标准正态分布的随机数，封装进一个数组返回
    //当然，因为这个函数运行较快，也可以扔掉一个
    //return [u*c,v*c];
    return u*c;
}
var num=getNumber(180,10);
// console.log("aaaS"+num);
class Football{
    constructor(id,ptrength,pskill){
        this.id=id;
        this.positionX = Math.round(Math.random()*90+500);
        this.positionY = Math.round(Math.random()*60+350);
        this.v0x=0;
        this.v0y=0;
        this.pskill=pskill;
        this.engle=getNumber(kickengle,pskill);
        this.a= Math.round(Math.random()*15+15);
        // this.vtx=;//最高速度
        // this.vty=ptrength;
        this.vtx=ptrength*(Math.cos(this.engle*Math.PI/180));
        this.vty=ptrength*(Math.sin(this.engle*Math.PI/180));
        // this.vtx=Math.round(99-Math.random()*198);//最高速度
        // this.vty=Math.round(99-Math.random()*198);
        this.sx = 0;//位移
        this.sy = 0;
        this.vtsx =(10/98)*this.vtx+(5 - 9/98);//位移
        this.vtsy =(10/98)*this.vty+(5 - 9/98);
        // this.vtsx = (9/98)*this.vtx+(3 - 9/98);//位移
        // this.vtsy = (9/98)*this.vty+(3 - 9/98);
        this.chax = (this.vtsx)/this.a;
        this.chay = (this.vtsy)/this.a;
    }
    drawball(){
        var x= this.positionX;
        var y= this.positionY;
        var img = new Image();
        img.src = "football.png";
        img.onload = function () {
            ctx.drawImage(img,x,y,20,20);
        }

    }
    move(){
        createcanvas();
        if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
           clearTimeout(a);
        }
        this.sx +=this.chax;
        this.sy +=this.chay;
        this.positionX += this.sx;
        this.positionY += this.sy;
        var x= this.positionX;
        var y= this.positionY;
        var img = new Image();
        img.src = "football.png";
        img.onload = function () {
            ctx.drawImage(img,x,y,20,20);
        }
        for(var p = 0;p<player.length;p++){
            player[p].draw();
        }

    }
    moveslow(){
        createcanvas();
        if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
           clearTimeout(a);
        }
       for(var p = 0;p<player.length;p++){
            player[p].draw();
        }
        this.a = 12;
        this.sx -=this.chax;
        this.sy -=this.chay;
        this.positionX += this.sx;
        this.positionY += this.sy;
        var x= this.positionX;
        var y= this.positionY;
        var img = new Image();
        img.src = "football.png";
        img.onload = function () {
            ctx.drawImage(img,x,y,20,20);
        }
    }
}

class Player{
        constructor(id,endutime,explotime,skill,strength){
            this.id=id;
            this.settime=0;
            this.explotime=Math.round(Math.random()*15+15);
            this.endutime=Math.round(Math.random()*10+5)+this.explotime;
            this.positionX=Math.round(Math.random()*1000+100);
            this.positionY=Math.round(Math.random()*500+100);
            // this.angle=(Math.random()*2*Math.PI);
            this.angle=(Math.random()*360);
            this.color="rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
            this.v0x=0;//初始速度
            this.v0y=0;javascript:void(0)
            this.a=0;//加速
            this.skill=Math.round(Math.random()*99)/2;
            this.strength=Math.round(Math.random()*99);
            this.vt=Math.round(Math.random()*99);//最高速度
            this.vtx=this.vt*(Math.cos(this.angle*Math.PI/180));
            this.vty=this.vt*(Math.sin(this.angle*Math.PI/180));
            // console.log(Math.cos(this.angle*Math.PI/180));
            // this.vtx=Math.round(99-Math.random()*198);//最高速度
            // this.vty=Math.round(99-Math.random()*198);
            this.time=0;//时间
            this.sx = 0;//位移
            this.sy = 0;
            this.vtsx = (9/98)*this.vtx+(3 - 9/98);//位移
            this.vtsy = (9/98)*this.vty+(3 - 9/98);
            this.chax = (this.vtsx)/this.explotime;
            this.chay = (this.vtsy)/this.explotime;
            //vt= v0+at   s=v0*time+1/2a*time^2   vt^2-v0^2 =2as 
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX+3,this.positionY-5,10,0,Math.PI *2,true);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.strokeText(this.id,this.positionX,this.positionY);
            ctx.closePath();
        }
        run(){
            createcanvas();
            football.drawball();
            if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
               clearTimeout(t);
               clearTimeout(t1);
            }
            this.time+=0.05;
            this.a = 2;
            this.sx +=this.chax;
            this.sy +=this.chay;
            this.positionX += this.sx;
            this.positionY += this.sy;
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX+3,this.positionY-5,10,0,Math.PI *2,true);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.strokeText(this.id,this.positionX,this.positionY);
            ctx.closePath();
            // ctx.fill();
            for(var p = 0;p<player.length;p++){
                player[p].draw();
            }

        }
        runlong(){
            
            createcanvas();
            football.drawball();
            for(var p = 0;p<player.length;p++){
                alert("a");
                player[p].draw();
            }
            if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
               clearTimeout(t);
            }
            this.positionX += this.sx;
            this.positionY += this.sy;
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX+3,this.positionY-5,10,0,Math.PI *2,true);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.strokeText(this.id,this.positionX,this.positionY);
            ctx.closePath();
        }
        runslow(){
            // console.log("settime:"+this.settime);
            createcanvas();
            football.drawball();
            if(this.positionX<=70 || w-this.positionX <=70 || this.positionY<=40 || h- this.positionY <=40){
               clearTimeout(t);
            }
           for(var p = 0;p<player.length;p++){
                player[p].draw();
            }
            this.time +=0.05;
            this.a = 12;
            this.sx -=this.chax;
            this.sy -=this.chay;
            this.positionX += this.sx;
            this.positionY += this.sy;
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX+3,this.positionY-5,10,0,Math.PI *2,true);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.strokeText(this.id,this.positionX,this.positionY);
            ctx.closePath();
        }
        kickball(){
            if((this.settime>0) && (this.settime < (this.endutime + this.explotime-20))){
                console.log("no settime:"+this.settime);
                alert("离近点再踢吧");
                football.drawball();
                console.log("thisendododo:"+(this.endutime + this.explotime-20));
            }else{
                console.log("kick settime:"+this.settime);
                footballmove();
            }
        }
    }
    createcanvas();
    var player =[];
    var i =1;
    var football;
    football=new Football("aaa");
    football.drawball();
    var kickengle=240;
    var btn =document.getElementById("btn");
    // var btn2 =document.getElementById("add2");
    var btn3 =document.getElementById("add3");
    var btn4 =document.getElementById("add4");
    var t;
    var a;
    var t1;
    btn.addEventListener('click',function(){
        addplayer(endutime,explotime,strength,skill);
    },false);
    function addplayer(endutime,explotime,strength,skill){
        kickengle=document.getElementById("kickengle").value;
        var p1= new Player(i);
        football.engle=getNumber(kickengle,p1.skill);
        football.vtx=(p1.strength)*(Math.cos((football.engle)*Math.PI/180));
        football.vty=(p1.strength)*(Math.sin((football.engle)*Math.PI/180));
        football.sy = 0;
        football.sx = 0;//位移
        // console.log(football.vtx);
        football.vtsx =(10/98)*football.vtx+(5 - 9/98);//位移
        football.vtsy =(10/98)*football.vty+(5 - 9/98); 
        // console.log(football.vtsx);
        football.chax = (football.vtsx)/football.a;
        football.chay = (football.vtsy)/football.a;
        console.log(football.engle);
        football.drawball();
        runtoball(p1);
        // console.log(p1.settime);
        // if (p1.settime !==0) {
        //     kick(p1);
        //     football.drawball();

        // }else{
        //     return;
        // }
        // var settime=0;
        // t=setInterval(function(){
            
        //   if(settime < p1.explotime){
        //     p1.run();
        //   }else if(settime> p1.explotime &&settime< p1.endutime){
        //     p1.runlong();
        //   }else if(settime >p1.endutime &&settime< (p1.endutime + p1.explotime)){
        //     p1.runslow();
        //   }
        //   else if(settime > p1.endutime + p1.explotime){
        //     clearTimeout(t);
        //     settime=0;
        //     p1.settime=settime;
        //   }
        //   settime++;
        //   p1.settime=settime;
        // }, 50);
        player.push(p1);
        console.log(player);
        // console.log(player);
        i++;
    }
    // addplayer();
    
    function footballmove(){
        var settime=0;
        // console.log("move settime:"+player[0].settime);
        a = setInterval(function(){
            if(settime < football.a){
                football.move();
            }else if(settime >= football.a && settime < 2*(football.a)){
                football.moveslow();
            }else if(settime >= (football.a + football.a)){
                clearTimeout(a);
                settime=0;
            }
            settime++;
        }, 50);
    }
    // btn2.addEventListener('click',footballmove,false);
    function runtoball(oneplayer){
        oneplayer.vtsx = football.positionX - oneplayer.positionX;
        oneplayer.vtsy = football.positionY - oneplayer.positionY;
        oneplayer.chax = (oneplayer.vtsx)/oneplayer.explotime /oneplayer.explotime;
        oneplayer.chay = (oneplayer.vtsy)/oneplayer.explotime /oneplayer.explotime;
        var settime=0;
        t1 = setInterval(function(){
          if(settime < oneplayer.explotime){
            oneplayer.run();
            // console.log(oneplayer.sx,oneplayer.sy);
          }
          else if(settime >= oneplayer.explotime && settime < 2*(oneplayer.explotime)){
            oneplayer.runslow();
          }
          else if(settime >= 2*(oneplayer.explotime)){
            clearTimeout(t1);
            settime=0;
            oneplayer.settime=settime;
          }
          oneplayer.settime=settime;
          settime++;          
        }, 50);
    }

    btn3.addEventListener('click',function(){
        runtoball(player[selindex]);
    },false);
    function kick(oneplayer){
         oneplayer.kickball();
    }
    btn4.addEventListener('click',function(){
        kick(player[selindex]);
    },false);
    
    ballx.onchange=function(){
        football.positionX=ballx.value;
        football.positionY=bally.value;
        createcanvas();
        for(var p = 0;p<player.length;p++){
                player[p].draw();
        }
        football.drawball();
    }
    bally.onchange=function(){
        football.positionX=ballx.value;
        football.positionY=bally.value;
        createcanvas();
        for(var p = 0;p<player.length;p++){
                player[p].draw();
        }
        football.drawball();
    }
    
    window.onchange=function getengle(){
        selindex=sel.selectedIndex;
        console.log(selindex);
        kickengle=document.getElementById("kickengle").value;
        endutime = document.getElementById("endu").value;
        explotime =document.getElementById("explo").value;
        strength =document.getElementById("stre").value;
        skill =document.getElementById("skill").value;
        document.getElementById("ballxcon").innerHTML=ballx.value;
        document.getElementById("ballycon").innerHTML=bally.value;
        document.getElementById("playerxcon").innerHTML=playerx.value;
        document.getElementById("playerycon").innerHTML=playery.value;
        document.getElementById("kickenglecon").innerHTML=kickengle;
        document.getElementById("endup").innerHTML = endutime;
        document.getElementById("explop").innerHTML = explotime;
        document.getElementById("strep").innerHTML =strength;
        document.getElementById("skillp").innerHTML=skill;
        football.engle=getNumber(kickengle,player[selindex].skill);
        football.vtx=(player[selindex].strength)*(Math.cos((football.engle)*Math.PI/180));
        football.vty=(player[selindex].strength)*(Math.sin((football.engle)*Math.PI/180));
        football.sy = 0;
        football.sx = 0;//位移
        // console.log(football.vtx);
        football.vtsx =(10/98)*football.vtx+(5 - 9/98);//位移
        football.vtsy =(10/98)*football.vty+(5 - 9/98); 
        // console.log(football.vtsx);
        football.chax = (football.vtsx)/football.a;
        football.chay = (football.vtsy)/football.a;
        // btn2.addEventListener('click',footballmove,false);
        // console.log("engle:"+football.engle+"选的角度："+kickengle+"正态分布误差："+football.pskill);
    }