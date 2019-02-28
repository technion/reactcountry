import React from "react";
import ReactDOM from "react-dom";

import { CountryInformationPage } from "./countryinfo.tsx";

const App = () => {
  return  (
    <h2>
    hello world
    <CountryInformationPage />
    </h2>
  );
};


ReactDOM.render(<App />, document.getElementById("content"));
