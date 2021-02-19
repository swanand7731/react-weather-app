import React from "react";
import Navbar from "./Navbar";
import WeatherInput from "./WeatherInput";
import WeatherList from "./WeatherList";
export default function App() {
  return (
    <div className="container-fullwidth">
      <div className="">
        <Navbar />
        <WeatherInput />
        <hr />
        <WeatherList />
      </div>
    </div>
  );
}
