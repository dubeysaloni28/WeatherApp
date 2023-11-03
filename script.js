const apikey = "c099e89c450be2f1650860232ef49a7f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const reponse = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await Response.json();

    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "  %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


checkWeather()
