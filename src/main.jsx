import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Import your Redux store
import App from "./App";
import "./index.css";

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the App component with the Provider and pass the store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);