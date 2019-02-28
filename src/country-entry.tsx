import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from 'easy-peasy';

import { CountryInformationPage } from "./countryinfo";
import { Navigation } from "./navbar";
import { CountryData } from "./countrydata";
import { store } from "./countrystore";

const App = () => {
  return (
    <>
    <StoreProvider store={store}>
    <Navigation />
    Select your country below
    <CountryInformationPage />
    <CountryData />
    </StoreProvider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("content"));
