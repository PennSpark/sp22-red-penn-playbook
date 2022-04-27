import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/index-redux.js";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
