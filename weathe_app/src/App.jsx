import { useState } from "react";
import "./App.css";

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function formatTime(timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000);

    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    });
  }

  async function handleSearch() {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city.trim(),
        )}&appid=${apiKey}&units=metric`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Weather data not found");
      }

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=metric`,
      );

      const forecastData = await forecastResponse.json();

      const rainChance = forecastResponse.ok
        ? Math.round((forecastData.list?.[0]?.pop || 0) * 100)
        : 0;

      setWeather({
        city: data.name,
        country: data.sys.country,

        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),

        condition: data.weather[0].description,
        icon: data.weather[0].main,

        humidity: data.main.humidity,
        pressure: data.main.pressure,

        windSpeed: Math.round(data.wind.speed * 3.6),
        visibility: data.visibility / 1000,

        sunrise: formatTime(data.sys.sunrise, data.timezone),
        sunset: formatTime(data.sys.sunset, data.timezone),

        rainChance: rainChance,
      });

      setCity("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  function getIcon(condition) {
    const icons = {
      Clear: "☀️",
      Clouds: "🌤️",
      Rain: "🌧️",
    };

    return icons[condition] || "🌤️";
  }

  return (
    <div className="weather-app">
      <header className="header">
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Loading..." : "Search"}
          </button>
        </div>
      </header>

      {error && <p style={{ color: "#ff8080" }}>{error}</p>}

      {weather && (
        <main>
          <section className="main-weather">
            <div className="current-weather">
              <h2>
                📍 <b>{weather.city}</b>
              </h2>

              <p>
                <b>{weather.country}</b>
              </p>

              <div className="temperature">
                <span>{getIcon(weather.icon)}</span>

                <h3>
                  {weather.temperature}
                  <sup>°C</sup>
                </h3>
              </div>

              <h2>
                {weather.condition.replace(/\b\w/g, (letter) =>
                  letter.toUpperCase(),
                )}
              </h2>

              <p>Feels like {weather.feelsLike}°C</p>
            </div>

            <div className="weather-details">
              <div className="sun-details">
                <div>
                  <span>🌞</span>

                  <div>
                    <p>Sunrise</p>
                    <h3>{weather.sunrise}</h3>
                  </div>
                </div>

                <div>
                  <span>🌇</span>

                  <div>
                    <p>Sunset</p>
                    <h3>{weather.sunset}</h3>
                  </div>
                </div>
              </div>

              <h3>Weather Details</h3>

              <div className="details-grid">
                <div className="detail-box">
                  <span>💧</span>

                  <div>
                    <p>Humidity</p>
                    <h3>{weather.humidity}%</h3>
                  </div>
                </div>

                <div className="detail-box">
                  <span>💨</span>

                  <div>
                    <p>Wind Speed</p>
                    <h3>{weather.windSpeed} km/h</h3>
                  </div>
                </div>

                <div className="detail-box">
                  <span>🌧️</span>

                  <div>
                    <p>Rain Chance</p>
                    <h3>{weather.rainChance}%</h3>
                  </div>
                </div>

                <div className="detail-box">
                  <span>👁️</span>

                  <div>
                    <p>Visibility</p>
                    <h3>{weather.visibility} km</h3>
                  </div>
                </div>

                <div className="detail-box">
                  <span>🌡️</span>

                  <div>
                    <p>Pressure</p>
                    <h3>{weather.pressure} hPa</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
