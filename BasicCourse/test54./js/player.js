
class Player{
        constructor(id,endutime,explotime){
            this.id=id;
            this.explotime=Math.round(Math.random()*30);
            this.endutime=Math.round(Math.random()*15)+this.explotime;
            this.positionX=Math.round(Math.random()*90+500);
            this.positionY=Math.round(Math.random()*60+350);
            this.color="rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
            this.v0x=0;//初始速度
            this.v0y=0;
            this.a=0;//加速
            this.vtx=Math.round(99-Math.random()*198);//最高速度
            this.vty=Math.round(99-Math.random()*198);
            this.time=0;//时间
            this.sx = 0;//位移
            this.sy = 0;
            this.vtsx = (9/98)*this.vtx+(3 - 9/98);//位移
            this.vtsy = (9/98)*this.vty+(3 - 9/98);
            this.chax = (this.vtsx)/this.explotime;
            this.chay = (this.vtsy)/this.explotime;
            // console.log(this.v0x,this.v0y);
            // console.log(this.vtx,this.vty);
            //vt= v0+at   s=v0*time+1/2a*time^2   vt^2-v0^2 =2as 
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX,this.positionY,10,0,Math.PI *2,true);
            ctx.closePath();
            ctx.fill();
        }
        run(){
            createcanvas();
            
            if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
               clearTimeout(t);
            }
            this.time+=0.05;
            this.a = 2;
            this.sx +=this.chax;
            this.sy +=this.chay;
            this.positionX += this.sx;
            this.positionY += this.sy;
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX,this.positionY,10,0,Math.PI *2,true);
            ctx.closePath();
            ctx.fill();
            for(var p = 0;p<player.length-1;p++){
                player[p].draw();
            }
        }
        runlong(){
            createcanvas();
            for(var p = 0;p<player.length-1;p++){
                player[p].draw();
            }
            if(this.positionX<=80 || w-this.positionX <=80 || this.positionY<=50 || h- this.positionY <=50){
               clearTimeout(t);
            }
            this.positionX += this.sx;
            this.positionY += this.sy;
            ctx.beginPath();
            ctx.fillStyle= this.color;
            ctx.arc( this.positionX,this.positionY,10,0,Math.PI *2,true);
            ctx.closePath();
            ctx.fill();
        }
        runslow(){
            createcanvas();
           for(var p = 0;p<player.length-1;p++){
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
            ctx.arc( this.positionX,this.positionY,10,0,Math.PI *2,true);
            ctx.closePath();
            ctx.fill();
        }
    }
    createcanvas();
    var player =[];
    var i =1;
    var btn =document.getElementById("add");
    // var p1= new Player(p1);
    btn.onclick=function addplayer(){
        var p1= new Player(i);
        var settime=0;
        var t=setInterval(function(){
            settime++;
          if(settime < p1.explotime){
            p1.run();
          }else if(settime> p1.explotime &&settime< p1.endutime){
            p1.runlong();
          }else if(settime >p1.endutime &&settime< (p1.endutime + p1.explotime)){
            p1.runslow();
          }
          else if(settime > p1.endutime + p1.explotime){
            clearTimeout(t);
            settime=0;
          }
        }, 50);
        player.push(p1);
        console.log(player);
        i++;
    }
