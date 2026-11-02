import { useState } from "react";

function Header() {
  const [city, setCity] = useState("");

  function handleSearch() {
    if (city.trim() === "") {
      alert("Please enter a city name!");
      return;
    }

    console.log("Searched City:", city);
  }

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">🌤️</span>

        <div>
          <h1>
            Weather<span>Now</span>
          </h1>
          <p>Your Weather, Anytime</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Location Button */}
      <button className="location-btn">📍 Use My Location</button>
    </header>
  );
}

export default Header;
