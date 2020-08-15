export default function rootReducer(state = {info: []}, action) {
  switch (action.type) {
    case "SET_LOCATION_AND_WEATHER":
      return Object.assign({}, state, {
        info: action.payload
      });
    default:
      return state;
  }
}
