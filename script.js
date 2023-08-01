const apikey="a7de43f909f0f7ab6f428c22c33d4e23"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBtn = document.querySelector(".search-bar button");
const weathericon = document.querySelector(".weather")
const searchBox = document.querySelector("#input");

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather();




async function checkWeather(city){

    const response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{ 
        let data = await response.json();
        

        document.querySelector('.city').innerHTML=data.name
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"c";
        document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
        document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';

        
        if (data.weather[0].main=='Clouds'){
            weathericon.src='clouds.png';
        }
        else if (data.weather[0].main=='Clear'){
            weathericon.src='clear.png';
        }
        else if (data.weather[0].main=='Rain'){
            weathericon.src='rain.png';
        }
        else if (data.weather[0].main=='Drizzle'){
            weathericon.src='drizzle.png';
        }
        else if (data.weather[0].main=='Mist'){
            weathericon.src='mist.png';
        }
        else if (data.weather[0].main=='Snow'){
            weathericon.src='snow.png';
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
    }
}
var typed = new Typed(".dynamic", {
    strings: ["Hello","ಹೇಗಿದ್ದೀರ!","Kemcho"],
    typespeed: 10,
    backspeed: 10,
    backDelay:1000,
    typeDelay:1000,
    loop: true,
    fontsize:100,
    color:'#FFFF00'
    

});

searchBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".search-bar button").click();
    }
  }
);