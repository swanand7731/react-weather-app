import { FETCH_WEATHERDATA } from "../actions/types";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHERDATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
