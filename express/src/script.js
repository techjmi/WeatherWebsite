// Example using Fetch API
document.getElementById('weatherForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const city = document.getElementById('cityInput').value;
  
    try {
      const response = await fetch(`/weather?city=${city}`);
      const data = await response.json();
  
      // Handle the response data and update the UI
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });
  