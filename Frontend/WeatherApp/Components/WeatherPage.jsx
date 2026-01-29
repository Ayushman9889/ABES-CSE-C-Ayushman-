import React, { useState } from "react";
import "./WeatherPage.css";

function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      // 2️⃣ Fetch weather data
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation,weathercode,windspeed_10m&timezone=auto`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch weather data.");
    }
  };

  return (
    <div id="weather-page">
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <p>
            <b>City:</b> {city}
          </p>
          <p>
            <b>Temperature:</b> {weather.hourly.temperature_2m[0]}°C
          </p>
          <p>
            <b>Wind Speed:</b> {weather.hourly.windspeed_10m[0]} km/h
          </p>
          <p>
            <b>Humidity:</b> {weather.hourly.relative_humidity_2m[0]}%
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
