import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/userContext.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
