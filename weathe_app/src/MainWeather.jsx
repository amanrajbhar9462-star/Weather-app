import "./MainWeather.css";
function MainWeather() {
  return (
    <section className="main-weather">
      <div className="current-weather">
        <h2>📍 Varanasi</h2>

        <p>Uttar Pradesh, India</p>

        <div className="temperature">
          <span>🌤️</span>

          <h3>
            32<sup>°C</sup>
          </h3>
        </div>

        <h2>Partly Cloudy</h2>

        <p>Feels like 35°C | H: 34° L: 24°</p>
      </div>
    </section>
  );
}

export default MainWeather;
