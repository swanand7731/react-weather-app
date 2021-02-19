import { FETCH_GEOCODE, FETCH_WEATHERDATA } from "./types";
import mapBox from "../apis/Mapbox";
import openWeather from "../apis/OpenWeather";

export const fetchPlaceWeatherData = (place) => async (dispatch, getState) => {
  await dispatch(fetchGeoCode(place));
  const geoCodeData = getState().geocode;
  await dispatch(fetchWeatherData(geoCodeData.geometry.coordinates));
};

export const fetchGeoCode = (place) => async (dispatch) => {
  const response = await mapBox.get(`/${place}.json`);
  dispatch({
    type: FETCH_GEOCODE,
    payload: response.data.features[0],
  });
};

export const fetchWeatherData = (coordinates) => async (dispatch) => {
  const response = await openWeather.get("/onecall", {
    params: {
      lat: coordinates[1],
      lon: coordinates[0],
      units: "metric",
    },
  });
  dispatch({ type: FETCH_WEATHERDATA, payload: response.data });
};
