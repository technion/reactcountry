import React, { useState, useEffect, Fragment } from "react";

import { CountrySelector } from "./countryselector";

export const CountryInformationPage = () => {
  // Main application component. Moves through stages:
  // 1. Loading screen
  // 2. Selector
  // 3. Country specific information displayed
  const [ countryListInfo, setCountryListInfo ] = useState<any>(null);
  useEffect(() => {
    getCountryList()
      .then((countryListInfoSet: any) => {
        setCountryListInfo(countryListInfoSet);
    })
    .catch((e) => {
      throw new Error(e.message);
    });
  });

  if (countryListInfo == null) {
    return (
      <Fragment>
      Loading info
      </Fragment>
      );
  }

  return (
    <CountrySelector info={countryListInfo} />
  );
};

async function getCountryList() {
  // API documented here: https://restcountries.eu/
  const API = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(API);
  // Detect errors such as 404 and throw
  if (!response.ok) {
      throw new Error("Invalid response from server fetch");
    }
  return await response.json();
}
