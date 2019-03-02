import React, { useEffect, useState } from "react";

import { CountrySelector, CountryElem } from "./countryselector";

export const CountryInformationPage = () => {
  // Main application component. Moves through stages:
  // 1. Loading screen
  // 2. Selector
  // 3. Country specific information displayed
  const [ countryInfoList, setcountryInfoList ] = useState<CountryElem[] | undefined>(undefined);
  const [ errorState, setErrorState ] = useState<string | undefined>(undefined);
  useEffect(() => {
    getCountryInfoList()
      .then((cli: CountryElem[]) => {
        setcountryInfoList(cli);
      }).catch((error) => {
        setErrorState(error)
      });
  }, []);

  // Throw errors further up to the error boundary
  if (errorState) {
    throw new Error(errorState);
  }

  return (
    <CountrySelector countryInfoList={countryInfoList} />
  );
};

async function getCountryInfoList() {
  // API documented here: https://restcountries.eu/
  const API = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(API);
  // Detect errors such as 404 and throw
  if (!response.ok) {
      throw new Error("Invalid response from server fetch");
    }
  return await response.json();
}
