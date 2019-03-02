import React, { useEffect, useState } from "react";

import { CountrySelector } from "./countryselector";

export const CountryInformationPage = () => {
  // Main application component. Moves through stages:
  // 1. Loading screen
  // 2. Selector
  // 3. Country specific information displayed
  const [ countryInfoList, setcountryInfoList ] = useState<any>(undefined);
  useEffect(() => {
    getCountryInfoList()
      .then((cli: any) => {
        setcountryInfoList(cli);
    });
  }, []);

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
