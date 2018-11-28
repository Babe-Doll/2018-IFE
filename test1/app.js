/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-26 10:04:21
 * @version $Id$
 */

function change()
{
	
	var idt=document.getElementById("t");
	var ids=document.getElementById("s");
	if(idt.className=="title")
	{
		idt.className="title-change";
		ids.className="subline-change";
	}
	else if(ids.className=="subline-change")
	{
		

		idt.className="title";
		ids.className="subline";

	}
	else{
		alert("over");
	}

	// if(	document.getElementById("s").className="subline")
	// 	{
	// 		document.getElementById("t").className="subline-change";
	// 	}else{
	// 			document.getElementById("s").className="subline";
	// 	}
}