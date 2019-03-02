import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from 'easy-peasy';
import { H1 } from "@blueprintjs/core";

import { CountryInformationPage } from "./countryinfo";
import { Navigation } from "./navbar";
import { CountryData } from "./countrydata";
import { store } from "./countrystore";
import { ErrorBoundary } from "./errors";

import "./styles.css";

const App = () => {
  return (
    <StoreProvider store={store}>
      <React.StrictMode>
        <Navigation />
        <H1 className="myheader">
          Country information page
        </H1>
        Select your country below
        <ErrorBoundary>
          <CountryInformationPage />
        </ErrorBoundary>
      <CountryData />
      </React.StrictMode>
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("content"));
