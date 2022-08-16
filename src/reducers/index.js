import { combineReducers } from "redux";
const numberReducer = (number = [], action) => {
  switch (action.type) {
    case "NUMBER":
      return [...action.payload];
    default:
      return number;
  }
};
const largeReducer = (largenumber = null, action) => {
  switch (action.type) {
    case "LARGE_NUMBER":
      return action.payload;
    default:
      return largenumber;
  }
};
const secondReducer = (secondnumber = null, action) => {
  switch (action.type) {
    case "SECOND_NUMBER":
      return action.payload;
    default:
      return secondnumber;
  }
};
export default combineReducers({
  numbers: numberReducer,
  largeNumberInteger: largeReducer,
  secondnumber: secondReducer,
});
