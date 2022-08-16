import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import  Reducer  from "./reducers";
import App from "./Components/App";

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
