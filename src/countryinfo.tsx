import React, { useEffect } from "react";

import { useActions } from "./countrystore";
import { CountrySelector } from "./countryselector";

export const CountryInformationPage = () => {
  // Main application component. Moves through stages:
  // 1. Loading screen
  // 2. Selector
  // 3. Country specific information displayed
  const initialise = useActions(actions => actions.initialiseCountryList)
  useEffect(() => {
    initialise();
  });

  return (
    <CountrySelector />
  );
};

