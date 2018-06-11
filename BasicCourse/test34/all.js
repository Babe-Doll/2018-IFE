var table2=document.getElementById("table-wrapper2");
var canvas=document.getElementById("canvas");
var svg=document.getElementById("svg");
var bar= document.getElementById("bar");
var barcon=document.getElementById("barcon");
var tr=table2.getElementsByTagName("tr");
var td=table2.getElementsByTagName("td");
for(var i=td.length-1;i>0;i--){
    var row=tr[0];
    // console.log(td[i]);
    td[i].onmouseover=function(){
        row=this.parentNode.getElementsByTagName('td');
        console.log(row);
        // console.log(row.length);
        var hovertd=[];
        for(var j=row.length-1;j>=0;j--)
        {

            if(row.length==14){
                if(j>0){

                    hovertd.unshift(row[j]);

                }

            }
            if(row.length==13){
                if(j>=0){

                    hovertd.unshift(row[j]);

                }

            }
        }//行
        console.log(hovertd);
        // return row;
        createbar(hovertd);
        createline(hovertd);
    }
}