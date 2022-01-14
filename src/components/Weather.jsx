import React, { useState } from "react";

export default function Weather() {
  // weather state
  const [weatherData, setWeatherData] = useState([{}]);
  // city state
  const [city, setCity] = useState("");
  // api key
  const apiKey = "e1ac1ac04b85ac57cffae0f4e4915681";

  // get weather event
  async function getWeather(e) {
    try {
      // fetch the api
      const fetchApi = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      // get json from api
      const jsonOfApi = await fetchApi.json();

      // send data to setWeatherData state
      setWeatherData(jsonOfApi);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    // main container
    <div className="container">
      {/* input container */}
      <div className="input-container f-row">
        {/* text input */}
        <input
          className="input"
          placeholder="Enter City Name ..."
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>

        {/* search button */}
        <button className="search-button" onClick={getWeather}>
          Search
        </button>
      </div>

      {/* show 404 erro */}
      {weatherData.cod === "404" ? (
        <p style={{ color: "#EA6E4B", fontSize: "30px" }}>City Not Found !</p>
      ) : !weatherData.main ? (
        // welcome message
        <p className="welcome-message">
          Welcome To Weather App. Pleas Enter A city Name ...{" "}
        </p>
      ) : (
        // weather card container
        <div className="weatehr-container">
          {/* city name */}
          <p className="weather-city">
            {weatherData.name}
            <br />
            <span className="weather-date">{`${new Date().toLocaleString()}`}</span>
          </p>

          {/* temp */}
          <p className="weather-temp">{Math.round(weatherData.main.temp)} F</p>

          {/* weather status image */}
          <img
            className="w-icon"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          ></img>

          {/* feels like */}
          <p>Feels like :{Math.round(weatherData.main.feels_like)}</p>

          {/* wind container */}
          <div className="f-row " style={{ margin: "auto" }}>
            {/* wind image */}
            <div style={{ margin: "auto", padding: "5px" }}>
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/27-weather/wind.png"
                alt=""
                style={{ width: "30px" }}
              />
            </div>

            {/* wind speed */}
            <div style={{ margin: "auto", padding: "5px" }}>
              <p>{weatherData.wind.speed} km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
