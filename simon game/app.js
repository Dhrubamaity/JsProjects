let gamesqn = [];
let usersqn = [];
let mylevel = [];
let btns = ["red", "green", "blue", "purple"];

let started = false;
let level = 0;
let hint = document.querySelector(".hint");
let maxlevel = document.querySelector(".level");

let allbtns = document.querySelectorAll(".box");
for (let btn of allbtns) {
    btn.addEventListener("click",btnpress);
   
}
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("game started");
        setTimeout(levelup,250);
    }
})
function gameflash(ranbtn) {
    ranbtn.classList.add("flash");
    setTimeout(function () {
        ranbtn.classList.remove("flash");
    }, 500);
    // console.log(ranbtn);
}

function userflash(btn){
 btn.classList.add("press");
 setTimeout(function() {
    btn.classList.remove("press");
 }, 150);
}
function levelup() {
    usersqn = [];
    level = level + 1;
    hint.innerText = `Level - ${level}`;
    hint.style.backgroundColor = "none";

    let ranind = Math.floor(Math.random() * 3);
    let rancol = btns[ranind];
    let ranbtn = document.querySelector(`.${rancol}`);

    gamesqn.push(rancol);
    
    console.log(gamesqn);
    gameflash(ranbtn);
}
function checkans(index){
   console.log(`current level is ${level}`)
//    let index = level - 1;
   if(usersqn[index] === gamesqn[index]){
    if(usersqn.length == gamesqn.length){
        mylevel.push(level);
        setTimeout(levelup,700);
    }
   }
   else{
    hint.innerText = "Game over \n (press any key to restart)";
    hint.style.backgroundColor = "#FF0000";
    maxlevel.innerText = (`your lasrt level was ${mylevel[mylevel.length-1]}`);
    reset();
   }
//    gameflash(ranbtn);
}

function btnpress(btn) {
    btn = this;
    let btncolor = btn.getAttribute("id");
    usersqn.push(btncolor);
    console.log(usersqn);
    userflash(btn);

    checkans(usersqn.length-1);
}

function reset(){
    started = false;
    gamesqn = [];
    usersqn = [];
    level = 0;
    
}
