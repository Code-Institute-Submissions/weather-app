// API Key and URL address
const api = {
    key: "c7083b6846aa8a85455185faa6de23ba",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

// city serach 
const citySearch = document.querySelector('.search');
citySearch.addEventListener('keypress', findCity);

function findCity(e) {
    if (e.keyCode == 13) {
        searchResults(citySearch.value);
    }
}

// fetching data from API
function searchResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

// displaying data for end user on. screen
function displayResults (weather) {
    console.log(weather);
    let currentCity = document.querySelector('.current-location .city');
    currentCity.innerText = `${weather.name}`;

    // display current date
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let currentDate = new Date();
   // let timeline = currentDate.getHours();

   // if (timeline >= 12 &&  timeline <= 0)
   //     $("#background").css("background", "url(../img/PM.jpg)");
  //  else 
   //     $("#background").css("background", "url(../img/AM.jpg)");

    let date = currentDate.getDate()+' '+monthNames[currentDate.getMonth()]+' '+currentDate.getFullYear();

    document.querySelector('.current-location .date').innerText = date;

    // display current temperature
    let temperature = document.querySelector('.current-temp .temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    // display current weather condition
    let weatherDescription = document.querySelector('.current-temp .weather-cond');
    weatherDescription.innerText = weather.weather[0].main;

    // display weather icon which describbes weather condition
    let showWeatherIcon = document.querySelector('.current-temp .weather-icon');
    showWeatherIcon.innerHTML = `<img src="assets/img/icons/${weather.weather[0].icon}.png"/>`;

    // show high and low temperature measures
    let hiLowTemp = document.querySelector('.current-temp .temp-diff');
    hiLowTemp.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

