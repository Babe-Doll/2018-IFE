var table2=document.getElementById("table-wrapper2");
var canvas=document.getElementById("canvas");
var svg=document.getElementById("svg");
var bar= document.getElementById("bar");
var barcon=document.getElementById("barcon");
var tr=table2.getElementsByTagName("tr");
var td=table2.getElementsByTagName("td");
var div = document.createElement("div");
var row2=td[14].parentNode.getElementsByTagName('td');
var hovertd2= [];
for (var j = row2.length - 1; j >= 0; j--) {
        if (j > 0) {

            hovertd2.unshift(row2[j]);

        }
}
console.log(hovertd2);



function create(){
    for(var i=td.length-1;i>0;i--) {
        var row = tr[0];
        // console.log(td[i]);
        td[i].onmouseover = function () {
            // div.innerHTML="  bianji ";
            div.style.height="20px";
            div.style.float="right";
            div.style.width="20px";
            div.style.background="url(img.png) no-repeat";
            this.appendChild(div);
            row = this.parentNode.getElementsByTagName('td');
            // console.log(row);
            // console.log(row.length);
            var hovertd = [];
            for (var j = row.length - 1; j >= 0; j--) {

                if (row.length == 14) {
                    if (j > 0) {

                        hovertd.unshift(row[j]);

                    }

                }
                if (row.length == 13) {
                    if (j >= 0) {

                        hovertd.unshift(row[j]);

                    }

                }
            }//行
            // console.log(hovertd);
            // return row;
            // this.removeChild(div);
            createbar(hovertd);
            createline(hovertd);
        };
        td[i].onmouseout = function () {
            this.removeChild(div);

            row = this.parentNode.getElementsByTagName('td');
            // console.log(row);
            // console.log(row.length);
            var hovertd = [];
            for (var j = row.length - 1; j >= 0; j--) {

                if (row.length == 14) {
                    if (j > 0) {

                        hovertd.unshift(row[j]);

                    }

                }
                if (row.length == 13) {
                    if (j >= 0) {

                        hovertd.unshift(row[j]);

                    }

                }
            }//行
            createbar(hovertd);
            createline(hovertd);
        }
    }
}
create();