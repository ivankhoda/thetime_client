import React from "react";
import ReactDOM from "react-dom";

import { App } from "../Components/App/App";
// import { store } from "./store/store";

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
