let valueSearch = document.getElementById("valueSearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temprature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.querySelector("form");

// Add an event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let cityName = valueSearch.value;

  if (cityName !== "") {
    searchWeather(cityName);
  }
});

// api key
let apiKey = "9505fd1df737e20152fbd78cdb289b6a";

// main function to fetch data
const searchWeather = async (cityName) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    // Update the UI using the main function
    updateWeatherUI(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const updateWeatherUI = (data) => {
  // Set city and country flag using html
  let city = document.getElementById("city");
  city.innerHTML = ` <figure class="name" id="city">
  <figcaption id="cityNameFigureCaption">${data.name} ${data.sys.country}</figcaption>
  <img
    src="https://flagsapi.com/${data.sys.country}/shiny/32.png"
    alt="Country Flag"
    id="countaryImg"
  />
</figure>`;

  // Setting the temperature using html
  temperature.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@4x.png" alt="Weather Icon" />
    <figcaption>
      <span>${Math.round(data.main.temp)}</span>
      <sup>o</sup>C
    </figcaption>
  `;

  // Setting the weather description
  description.textContent = data.weather[0].description;

  // Setting the clouds, humidity, and pressure
  clouds.textContent = data.clouds.all;
  humidity.textContent = data.main.humidity;
  pressure.textContent = data.main.pressure;
};
