const hiLowTempRef = document.querySelector('.current-temp .temp-diff');
const citySearch = document.querySelector('.search');
const currentCity = document.querySelector('.current-location .city');
const temperatureRef = document.querySelector('.current-temp .temperature');
const weatherDescriptionRef = document.querySelector('.current-temp .weather-cond');
const showWeatherIconRef = document.querySelector('.current-temp .weather-icon');
const currentLocationDate = document.querySelector('.current-location .date');
const submitBtn = document.getElementById('submit-btn');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const api = {
  key: 'c7083b6846aa8a85455185faa6de23ba',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};
/**
 * Searching for a city
 * @param event {string} - Id of the city to provide for API
 */
function findCity() {
    searchResults(citySearch.value);
    document.getElementById('submit-btn').click;
}
window.addEventListener('keypress', function(event){
    if (event.keyCode == 13) {
        findCity();
    }
});
/**
 * Searching the weather api and will run displayResults
 * @param query {string} - The name of the city
 */
function searchResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then((response) => response.json())
  .then((weatherData) => {
      console.log(weatherData);
      console.log(weatherData.dt);
      console.log(weatherData.sys.sunrise);
      console.log(weatherData.sys.sunset);
      $('#error').css('display', 'none');
      $('.current-temp').css('display', 'block');
      $('.current-location').css('display', 'block');
      displayResults(weatherData);
    })
  .catch((err) => {
      $('#error').css('display', 'block');
      $('.current-temp').css('display', 'none');
      $('.current-location').css('display', 'none');
  });
}
/**
 * Displays the api results to the user
 * @param weatherData {object} - Weather Object coming from APi
 */
function displayResults(weatherData) {
    if (weatherData != null || weatherData != undefined) {
        if (weatherData.dt > weatherData.sys.sunrise && weatherData.dt < weatherData.sys.sunset) {
            $('#background').css('background', 'url(assets/img/AM.jpg)');
        } else {
            $('#background').css('background', 'url(assets/img/PM.jpg)');
        }
    }
  currentCity.innerText = `${weatherData.name}`;
  const currentDate = new Date();
  const date = currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
  currentLocationDate.innerText = date;
  temperatureRef.innerHTML = `${Math.round(weatherData.main.temp)}<span>°C</span>`;
  weatherDescriptionRef.innerText = weatherData.weather[0].main;
  showWeatherIconRef.innerHTML = `<img src="assets/img/icons/${weatherData.weather[0].icon}.png">`;
  hiLowTempRef.innerHTML = `${Math.round(weatherData.main.temp_min)}°C / ${Math.round(weatherData.main.temp_max)}°C`;
}