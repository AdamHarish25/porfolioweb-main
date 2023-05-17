import React from "react";
import ReactDOM from "react-dom";
import "flowbite";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom';
import ReactGA from "react-ga4";
import reportWebVitals from "./reportWebVitals";

ReactGA.initialize("G-SSEV4L9P4G");
ReactDOM.render(
  <Router forceRefresh={false}>
    <App />
  </Router>,

  document.getElementById("root")
);


const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics)