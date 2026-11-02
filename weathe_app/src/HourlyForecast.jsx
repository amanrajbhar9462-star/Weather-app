import "./HourlyForecast.css";

function HourlyForecast() {
  return (
    <section className="hourly-forecast">
      {" "}
      <h2>Hourly Forecast</h2>
      <div className="hourly-container">
        <div className="hourly-card">
          <p>Now</p>
          <span>🌤️</span>
          <h3>32°C</h3>
        </div>

        <div className="hourly-card">
          <p>04 PM</p>
          <span>☀️</span>
          <h3></h3>
        </div>

        <div className="hourly-card">
          <p>05 PM</p>
          <span>🌤️</span>
          <h3></h3>
        </div>

        <div className="hourly-card">
          <p>06 PM</p>
          <span>🌥️</span>
          <h3></h3>
        </div>

        <div className="hourly-card">
          <p>07 PM</p>
          <span>🌙</span>
          <h3></h3>
        </div>

        <div className="hourly-card">
          <p>08 PM</p>
          <span>🌙</span>
          <h3></h3>
        </div>
      </div>
    </section>
  );
}

export default HourlyForecast;
