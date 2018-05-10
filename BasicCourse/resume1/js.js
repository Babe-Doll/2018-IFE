/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-09 15:38:41
 * @version $Id$
 */

function openclose(){
	var con =document.getElementById("close");
	if(con.className == "st-myinfo-con2"+" animated"+" zoomIn"+" 1")
	{
		document.getElementById("close").className="st-myinfo-conopen"+" animated"+" zoomIn"+" 1";
	}
	else if(con.className == "st-myinfo-conopen animated zoomIn 1"){
		document.getElementById("close").className="st-myinfo-con2 animated zoomIn 1";
	}
	else{

	}
}

window.onload=function wel() {
	/* Act on the event */
	var time=new Date();
	var h=time.getHours();
	if(h>=0&&h<=5){
    document.getElementById("greet-left").innerHTML='还不睡的话本萌妹会心疼的哦,';//噗嗤
		}else if(h>5&&h<=8){
    document.getElementById("greet-left").innerHTML='早上好:.ﾟヽ(*´∀`)ﾉﾟ.:';
		}else if(h>8&&h<=12){
    document.getElementById("greet-left").innerHTML='上午好( • ̀ω•́ ),';
		}else if(h>12&&h<=18){
    document.getElementById("greet-left").innerHTML ='下午好(ﾟω´),';
		}else if(h>18&&h<=22){
    document.getElementById("greet-left").innerHTML ='晚上好( • ̀ω•́ ),';
		}else if(h>23&&h<=24){
    document.getElementById("greet-left").innerHTML ='快克睡觉吧 ~';
		}
	}
