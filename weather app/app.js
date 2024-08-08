let apikey = "1499a45fd6688690f82b08d6406b3a43";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbar = document.querySelector(".topper input");
let searchicon = document.querySelector(".searchicon img");

async function checkweather (city){
    const apiresponse = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await apiresponse.json();

    console.log(data);
    if(data.cod == "404"){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".midbar").style.display = "none";
        document.querySelector(".bottom").style.display = "none";
    }
    else{

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity span").innerHTML = data.main.humidity;
    document.querySelector(".windspeed span").innerHTML = data.wind.speed;
 
    let cloudicon = document.querySelector(".image");

    if(data.weather[0].main == 'Clear'){
        cloudicon.src = "asset/clear.png";
    }
    else if(data.weather[0].main == 'Clouds'){
        cloudicon.src = "asset/clouds.png";
    }
    else if(data.weather[0].main =="Rain"){
        cloudicon.src = "asset/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        cloudicon.src = "asset/snow.png";
    }
    else if(data.weather[0].main == "Smoke"){
        cloudicon.src = "asset/mist.png";
    }
    document.querySelector(".midbar").style.display = "block";
    document.querySelector(".bottom").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  
}
}
searchicon.addEventListener("click",()=>{
    checkweather(searchbar.value);
})
