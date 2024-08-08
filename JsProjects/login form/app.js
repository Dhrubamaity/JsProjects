let form = document.querySelector("form");

form.addEventListener("submit",function(event){
event.preventDefault();

let user = document.querySelector("#user");
let pass = document.querySelector("#pass");
let div = document.querySelector("#box>div");
let btn =  document.querySelector("#box>button");


alert("your new account have been created");
div.innerText = (`Username - "${user.value}" \n & Password set to - "${pass.value}"`);
btn.innerText = ("registered");
btn.style.backgroundColor = "#00ff00";


})