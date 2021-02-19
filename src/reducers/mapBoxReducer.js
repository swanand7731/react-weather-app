import { FETCH_GEOCODE } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GEOCODE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
