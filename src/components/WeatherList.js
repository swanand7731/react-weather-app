import React from "react";
import WeatherCard from "./WeatherCard";
import { connect } from "react-redux";

const WeatherList = (props) => {
  return (
    <div className="row">
      {/* <div className="col-2 ml-3 mt-2">
        {props.weatherData.current && (
          <WeatherCard {...props.weatherData.current} current={true} />
        )}
      </div> */}
      {props.weatherData.daily &&
        props.weatherData.daily.map((dailyInfo, index) => {
          return (
            <div className="col-2 ml-3 mt-2" key={index}>
              <WeatherCard
                dt={dailyInfo.dt}
                weather={dailyInfo.weather}
                clouds={dailyInfo.clouds}
                temp={dailyInfo.temp.day}
                humidity={dailyInfo.humidity}
                current={false}
              />
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = ({ geocode, weatherData }) => {
  return {
    geocode,
    weatherData,
  };
};

export default connect(mapStateToProps)(WeatherList);
