import React from "react";
import "./App.css";
// components
import Weather from "./components/Weather";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Weather></Weather>
    </>
  );
}

export default App;
