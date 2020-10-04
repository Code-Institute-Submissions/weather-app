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
}