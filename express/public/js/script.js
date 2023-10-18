document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");
    const cityNameElement = document.getElementById("City_Name");
    const tempElement = document.getElementById("temp");
    const tempStatusElement = document.getElementById("temp_status");
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");
  
    searchBtn.addEventListener("click", () => {
      const cityName = cityInput.value;
      const apiKey = "2a2ac849f6ff879957a376d79a47eb3b"; // Replace with your actual API key
  
      // Function to get the current day as a string (e.g., "Sunday")
      function getDayString(day) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
      }
  
      // Make an API request to get weather data for the entered city
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          cityNameElement.textContent = data.name;
          const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
          tempElement.innerHTML = `${temperature}&deg;C`;
          tempStatusElement.innerHTML = `<i class="fas fa-cloud"></i>`;
  
          // Get the current date and day
          const currentDate = new Date();
          const day = currentDate.getDay(); // 0 for Sunday, 1 for Monday, and so on
          const date = currentDate.getDate();
          const month = currentDate.toLocaleString("default", { month: "short" });
  
          dayElement.textContent = getDayString(day);
          dateElement.textContent = `${date} ${month}`;
        })
        .catch((error) => {
          console.error("Error fetching weather data: " + error);
        });
    });
  });
  