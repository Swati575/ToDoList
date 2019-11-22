var addbtn=document.getElementById("btn");
var input=document.getElementById("inpt");
var div=document.getElementById("output");


var tasks=[];
var id=0;

addbtn.onclick=function()
                {
                    createArray();
                    createList();
                    id++;
                    console.log(tasks);
                }

function createArray()
{
    var obj=new Object;
    obj.id=id;
    obj.desc=input.value;

    tasks.push(obj);
}

function createList()
{
    div.innerHTML="";
    //var div1=document.createElement("div");
    var table=document.createElement("table");

    table.setAttribute("border",'1');
    table.setAttribute("width",'10%');
    /*table.setAttribute("height",'25%');
    table.setAttribute("width",'12%');*/
    for(let i=0;i<tasks.length;i++)
    {
        
        var tr=document.createElement("tr");

        var td=document.createElement("td");
        td.innerHTML=i+1;
        tr.appendChild(td);

        var t1=document.createElement("td");
        t1.innerHTML=tasks[i].desc;
        tr.appendChild(t1);

        var t2=document.createElement("td");
        var delbtn=document.createElement("button")
        delbtn.innerHTML='X';
        t2.appendChild(delbtn);
        tr.appendChild(t2);

        table.appendChild(tr);


        delbtn.onclick=function()
                        {
                            delFunction(i);
                        };

    } 
    div.appendChild(table);

}