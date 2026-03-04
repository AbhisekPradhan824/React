import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from "./reportWebVitals";
//import { ReducerDemo } from "./components/reducer-demo/reducer-demo";
import { FakeStore } from "./components/fakestore2/fakestore";

import { Provider } from "react-redux";
import store from "./components/fakestore2/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FakeStore />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
