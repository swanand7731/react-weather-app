import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlaceWeatherData } from "../actions";
import WeatherList from "./WeatherList";

class WeatherInput extends Component {
  state = { place: "" };
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchPlaceWeatherData(this.state.place);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4 mt-4">
            <form
              className="form-inline"
              onSubmit={(e) => this.handleSubmit(e)}
            >
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search weather of a place"
                  onChange={(e) => this.setState({ place: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Search
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { fetchPlaceWeatherData })(WeatherInput);
