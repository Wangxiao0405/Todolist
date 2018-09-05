//<div class="obj">
//      <input type="checkbox">
//      <p>1</p>
//      <div class="del"></div>
//</div>
// let arr1=["js","html","css","python"];
// let arr2=["aa","bb","cc","dd"];

let arr1;
let arr2;
arr1=localStorage.arr1?localStorage.arr1.split(","):[];
arr2=localStorage.arr2?localStorage.arr2.split(","):[];
let con1=document.querySelector("#con1");
let con2=document.querySelector("#con2");
let input=document.querySelector("#input");
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
console.log(con1, con2, input);

input.onkeydown=function (e) {
    if(e.keyCode==13&&this.value!=""){
        arr1.unshift(this.value);
        Update();
        this.value="";
    }
};
function Update(){
    localStorage.arr1=arr1.join(",");
    localStorage.arr2=arr2.join(",")
    con1.innerHTML="";
    con2.innerHTML="";
    num1.innerText=arr1.length;
    num2.innerText=arr2.length
    arr1.forEach((item,index)=>{
        let box=document.createElement("div");
        box.className="obj";
        // let str=`<input type="checkbox"><p>${item}</p><div class="del"></div>`;
        // box.innerHTML=str;
        let input=document.createElement("input");
        input.setAttribute("type","checkbox")
        input.className="input";
        let p=document.createElement("p");
        p.innerText=item;
        let del=document.createElement("div");
        del.className="del";
        box.appendChild(input);
        box.appendChild(p);
        box.appendChild(del);
        con1.appendChild(box);
        input.onclick=function () {
            arr1.splice(index,1);
            arr2.unshift(item);
            Update();
        };
        p.onclick=function(){
            let input=document.createElement("input");
            let text=p.innerText;
            input.value=text;
            p.innerText="";
            p.appendChild(input);
            input.onblur=function(){
                arr1.splice(index,1,this.value);
                Update();
            }
            input.focus();
        }
        del.onclick=function () {
            arr1.splice(index,1);
            Update();
        }
    });
    arr2.forEach((item,index)=>{
        let box=document.createElement("div");
        box.className="obj";
        let input=document.createElement("input");
        input.className="input";
        input.setAttribute("type","checkbox");
        input.setAttribute("checked","checked");
        let p=document.createElement("p");
        p.innerText=item;
        let del=document.createElement("div");
        del.className="del";
        box.appendChild(input);
        box.appendChild(p);
        box.appendChild(del);
        con2.appendChild(box);
        input.onclick=function () {
            arr2.splice(index,1);
            arr1.push(item);
            Update();
        }
        del.onclick=function () {
            arr2.splice(index,1);
            Update();
        }
    })
}
Update();

