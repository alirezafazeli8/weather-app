import React from "react";

export default function Header() {
  return (
    <header>
      {/* header container */}
      <div className="header-container">
        {/* openweather icon */}
        <div>
          <img
            className="open-weather-icon"
            src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
            alt=""
          />
        </div>
        {/* github icon */}
        <div>
          <a href="https://github.com/alirezafazeli8" target="_blank">
            <img
              className="github-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}
