const cityNameElement = document.getElementById("City_Name");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const tempElement = document.getElementById("temp");
const tempStatusElement = document.getElementById("temp_status");
const dateElement = document.getElementById("date"); // Element for displaying the date
const dayElement = document.getElementById("day"); // Element for displaying the day

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityInput.value;

  if (cityVal === "") {
    cityNameElement.innerText = "Please Enter City Before Search";
  } else {
    try {
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal},in&appid=2a2ac849f6ff879957a376d79a47eb3b`;
    
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);
      const arrData = [data];
      cityNameElement.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      const temperatureInCelsius = (arrData[0].main.temp - 273.15).toFixed(2);
tempElement.innerText = `${temperatureInCelsius} °C`;
    //   tempElement.innerText = arrData[0].main.temp;
      tempStatusElement.innerText = arrData[0].weather[0].main;

      const weatherMain = arrData[0].weather[0].main;
      if (weatherMain === "Clear") {
        tempStatusElement.innerHTML = '<i class="fas fa-sun"></i>';
      } else if (weatherMain === "Clouds") {
        tempStatusElement.innerHTML = '<i class="fas fa-cloud"></i>';
      } else if (weatherMain === "Rain") {
        tempStatusElement.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
      } else {
        tempStatusElement.innerHTML = '<i class="fas fa-cloud" style=color="#f1f2f6"></i>'; // Set a 
      }
      const currentDate = new Date();
      const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
      const date = currentDate.toLocaleDateString("en-US", { day: "numeric", month: "short" });

      dayElement.textContent = day;
      dateElement.textContent = date;
    }
     catch (error) {
      cityNameElement.innerText = "Please Enter City Name Properly";
      console.error("Error fetching weather data:", error);
    }
  }
};

searchBtn.addEventListener("click", getInfo);
