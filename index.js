const $ = (selector) => document.querySelector(selector);

const container = $(".container");
const search = $(".search-box button");
const weatherBox = $(".weather-box");
const weatherDetails = $(".weather-details");
const error404 = $(".not-found");

search.addEventListener("click", handleSearch);

function handleSearch() {
  const APIKey = "215164238a81a4b179d175809d7f6bbc";
  const city = $(".search-box input").value;
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

  if (city === "") return;

  fetch(APIUrl)
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = $(".weather-box img");
      const temperature = $(".weather-box .temperature");
      const description = $(".weather-box .description");
      const humidity = $(".weather-details .humidity span");
      const wind = $(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;
        case "Rain":
          image.src = "images/rain.png";
          break;
        case "Snow":
          image.src = "images/snow.png";
          break;
        case "Clouds":
          image.src = "images/cloud.png";
          break;
        case "Haze":
          image.src = "images/haze.png";
          break;
        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });
}
