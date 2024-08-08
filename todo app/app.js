let add = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

add.addEventListener("click", function () {

    let item = document.createElement("li");

    item.innerText = inp.value;
    inp.value = "";
    console.log("Task added");
    ul.appendChild(item);

    let delbtn = document.createElement("button");

    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    delbtn.innerText = "delete";
})

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("Task deleted");
    }

}
)





// let delbtns = document.querySelectorAll(".delete");
// for( let delbtn of delbtns){
// delbtn.addEventListener("click",function(){
// let par = this.parentElement;
// par.remove();
// })
// }





