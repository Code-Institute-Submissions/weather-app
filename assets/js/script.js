const hiLowTempRef = document.querySelector('.current-temp .temp-diff');
const citySearch = document.querySelector('.search');
const currentCity = document.querySelector('.current-location .city');
const temperatureRef = document.querySelector('.current-temp .temperature');
const showWeatherIcon = document.querySelector('.current-temp .weather-icon');
const currentLocationDate = document.querySelector('.current-location .date');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const api = {
  key: 'c7083b6846aa8a85455185faa6de23ba',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};
/**
 * Searching for a city
 * @param e {string} - Id of the city to provide for API
 */
function findCity(e) {
  if (e.keyCode == 13) {
    searchResults(citySearch.value);
  }
}
citySearch.addEventListener('keypress', findCity);
/**
 * Searching the weather api and will run displayResults
 * @param query {string} - The name of the city
 */
function searchResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}
/**
 * Displays the api results to the user
 * @param weather {object} - Weather Object coming from APi
 */
function displayResults(weather) {
  currentCity.innerText = `${weather.name}`;
  const currentDate = new Date();
  const date = currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
  currentLocationDate.innerText = date;
  if (weather.coord.dt > weather.sys.sunrise && weather.coord.dt < weather.sys.sunset) {
    $('#background').css('background', 'url(assets/img/PM.jpg)');
  } else {
    $('#background').css('background', 'url(assets/img/AM.jpg)');
  }
  temperatureRef.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  weatherDescription.innerText = weather.weather[0].main;
  showWeatherIcon.innerHTML = `<img src="assets/img/icons/${weather.weather[0].icon}.png">`;
  hiLowTemp.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}