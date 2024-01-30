# Weather Search Website

## Overview

This is a weather search website that allows users to retrieve current weather information for a specific location. The application is built using HTML, CSS, Node.js, and Express.js. It integrates the OpenWeather API to fetch real-time weather data.

## Features

- **Weather Search:** Users can enter a city name or coordinates to get the current weather information.

- **Responsive Design:** The website is designed to be responsive and user-friendly on various devices.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- OpenWeather API

## Getting Started (Backend)

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/techjmi/WeatherWebsite.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-search-website
   ```

3. Install Node.js and npm:

   Ensure you have Node.js installed on your machine. If not, you can download it from [here](https://nodejs.org/).

4. Install project dependencies:

   ```bash
   npm install
   ```

5. Set up your OpenWeather API key:

   - Get your API key by signing up at [OpenWeather](https://openweathermap.org/api).
   - Create a `.env` file in the project root and add your API key:

     ```env
     OPENWEATHER_API_KEY=your_api_key
     ```

6. Start the server:

   ```bash
   npm start
   ```

7. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## Frontend Development

The frontend of the website is primarily built using HTML, CSS, and JavaScript. You can explore and modify the frontend files located in the `public` directory.

## API Key Note

Please note that you need to obtain your own API key from OpenWeather and replace the placeholder in the `.env` file with your actual API key.

## Credits

- [OpenWeather API](https://openweathermap.org/api)
```

