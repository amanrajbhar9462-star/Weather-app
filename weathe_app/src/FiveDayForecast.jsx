import "./FiveDayForecast.css";

function FiveDayForecast() {
  return (
    <section className="five-day-forecast">
      <h2>5-Day Forecast</h2>

      <div className="forecast-list">
        <div className="forecast-card">
          <p>Wednesday</p>
          <span>☀️</span>
          <div className="forecast-temp">
            <strong>34°C</strong>
            <span>24°C</span>
          </div>
          <p>Sunny</p>
        </div>

        <div className="forecast-card">
          <p>Thursday</p>
          <span>🌤️</span>
          <div className="forecast-temp">
            <strong>33°C</strong>
            <span>25°C</span>
          </div>
          <p>Partly Cloudy</p>
        </div>

        <div className="forecast-card">
          <p>Friday</p>
          <span>🌧️</span>
          <div className="forecast-temp">
            <strong>30°C</strong>
            <span>23°C</span>
          </div>
          <p>Rainy</p>
        </div>

        <div className="forecast-card">
          <p>Saturday</p>
          <span>⛅</span>
          <div className="forecast-temp">
            <strong>32°C</strong>
            <span>24°C</span>
          </div>
          <p>Cloudy</p>
        </div>

        <div className="forecast-card">
          <p>Sunday</p>
          <span>☀️</span>
          <div className="forecast-temp">
            <strong>35°C</strong>
            <span>26°C</span>
          </div>
          <p>Sunny</p>
        </div>
      </div>
    </section>
  );
}

export default FiveDayForecast;
