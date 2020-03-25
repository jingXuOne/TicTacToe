import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Game from "./containers/Game";
import reducer from "./reducers";
import "./styles.css";

const rootElement = document.getElementById("root");
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  rootElement
);
