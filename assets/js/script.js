const api = {
    key: "c7083b6846aa8a85455185faa6de23ba",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const citySearch = document.querySelector('.search');
citySearch.addEventListener('keypress', findCity);

function findCity(e) {
    if (e.keyCode == 13) {
        searchResults(citySearch.value);
    }
}

function searchResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let currentCity = document.querySelector('.current-location .city');
    currentCity.innerText = `${weather.name}`;

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    let currentDate = new Date();
    let date = currentDate.getDate()+' '+monthNames[currentDate.getMonth()]+' '+currentDate.getFullYear();

    document.querySelector('.current-location .date').innerText = date;

    let temperature = document.querySelector('.current-temp .temperature');
    temperature.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weatherDescription = document.querySelector('.current-temp .weather-cond');
    weatherDescription.innerText = weather.weather[0].main;

    let hiLowTemp = document.querySelector('.current-temp .temp-diff');
    hiLowTemp.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}