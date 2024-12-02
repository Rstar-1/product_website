import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/scss/Index.scss";
import "../src/assets/scss/Font.scss";
import "../src/assets/scss/Structure.scss";
// import { store } from "./redux/Store";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

const root = ReactDOM.createRoot(document.getElementById("root"));

const lenisOptions = {
  lerp: 0.1,
  duration: 1.5,
  smoothTouch: false,
  smooth: true,
};

const isMobile = window.innerWidth <= 912;

const renderApp = () => (
  <Router>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </Router>
);

root.render(
  <React.StrictMode>
    {isMobile ? (
      <div>{renderApp()}</div>
    ) : (
      <ReactLenis root options={lenisOptions}>
        {renderApp()}
      </ReactLenis>
    )}
  </React.StrictMode>
);

reportWebVitals();
