import { combineReducers } from "redux";
import mapBoxReducer from "./mapBoxReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  geocode: mapBoxReducer,
  weatherData: weatherReducer,
});
