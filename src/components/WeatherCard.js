import React, { Component } from "react";
import { sun, water, cloud } from "./Icons";
import moment from "moment";

class WeatherCard extends Component {
  renderIcons = (weather) => {
    console.log(weather);
    if (weather.toLowerCase().includes("clouds"))
      return <i className="fa fa-cloud" aria-hidden="true"></i>;
    if (weather.toLowerCase().includes("clear"))
      return <i className="fa fa-sun-o" aria-hidden="true"></i>;
    if (weather.toLowerCase().includes("rain"))
      return <i className="fa fa-umbrella" aria-hidden="true"></i>;
    if (weather.toLowerCase().includes("haze"))
      return <i class="fa fa-mixcloud" aria-hidden="true"></i>;
  };

  render() {
    const {
      dt,
      sunrise,
      sunset,
      temp,
      humidity,
      pressure,
      clouds,
      visibility,
      wind_speed,
      weather,
      current,
    } = this.props;
    return (
      <div className="card" style={{ width: "12.5rem", height: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <span>{moment(dt * 1000).format("MMMM Do YYYY")}</span>
            <hr />
            <span>
              {weather[0] && this.renderIcons(weather[0].main)}
              &nbsp;
              {weather[0] && weather[0].main}
            </span>
          </h5>
          <p className="card-text">{weather[0] && weather[0].description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Temperature: {temp} °C</li>
          <li className="list-group-item">Humidity: {humidity}%</li>
          <li className="list-group-item">Clouds: {clouds}%</li>
        </ul>
      </div>
    );
  }
}
export default WeatherCard;
