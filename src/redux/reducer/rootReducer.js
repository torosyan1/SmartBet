export default function rootReducer(state = [], action) {
  switch (action.type) {
    case "SET_LOCATION_AND_WEATHER":
      return state = [action.payload];
    default:
      return state;
  }
}
