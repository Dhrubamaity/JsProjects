let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let input = document.querySelector(".topper input");
let button = document.querySelector(".topper button");
let qr = document.querySelector(".qr img");

async function getqr(link){
     const response = await fetch(url + link);
    //  var data = await response.json();   it directly give the qr code img not any json res.
     console.log(response.url);
     if(response == "404"){
        qr.innerText = "404";
     }else{
        qr.src = response.url;
     }

}
 button.addEventListener("click",()=>{
   getqr(input.value);
 })