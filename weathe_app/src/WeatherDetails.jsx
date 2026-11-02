function WeatherDetails() {
  return (
    <section className="weather-details">
      {/* Sunrise and Sunset */}
      <div className="sun-times">
        <div>
          <span>🌅</span>
          <p>Sunrise</p>
          <h3>05:45 AM</h3>
        </div>

        <div>
          <span>🌇</span>
          <p>Sunset</p>
          <h3>06:20 PM</h3>
        </div>
      </div>

      <h3>Weather Details</h3>

      {/* Weather Information */}
      <div className="details-grid">
        <div className="detail-card">
          💧
          <p>
            Humidity
            <strong>65%</strong>
          </p>
        </div>

        <div className="detail-card">
          💨
          <p>
            Wind Speed
            <strong>12 km/h</strong>
          </p>
        </div>

        <div className="detail-card">
          🌧️
          <p>
            Rain Chance
            <strong>40%</strong>
          </p>
        </div>

        <div className="detail-card">
          👁️
          <p>
            Visibility
            <strong>8 km</strong>
          </p>
        </div>

        <div className="detail-card">
          🌡️
          <p>
            Pressure
            <strong>1012 hPa</strong>
          </p>
        </div>

        <div className="detail-card">
          ☀️
          <p>
            UV Index
            <strong>6 (High)</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeatherDetails;
