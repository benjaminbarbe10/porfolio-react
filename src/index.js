import React from "react";
import ReactDOM from "react-dom";
import "./assets/stylesheets/index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/redux";

//
// ─── RENDER THE APP IN THE INDEX.HTML FILE ────────────────────────────────────
//

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("app")
);
