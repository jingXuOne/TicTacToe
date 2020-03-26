import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Game from "./containers/Game";
import reducer from "./redux/reducers";
import { aiplayer } from "./redux/reducers/middleware";

import "./styles.css";

const rootElement = document.getElementById("root");
const store = createStore(reducer, applyMiddleware(aiplayer));

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  rootElement
);

/*
Dipatch(action) => middleware => reducer
Dispatch(ActionA) => middleware

*/
