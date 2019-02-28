import React, { useState, useEffect, Fragment } from "react";
import { MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemPredicate, ItemRenderer } from "@blueprintjs/select";

import { CountrySelector } from "./countryselector.tsx";


export const CountryInformationPage = () => {
  const [ countryListInfo, setCountryListInfo ] = useState<any>(null);
  useEffect(() => {
    getCountryList().then((countryListInfo: any) => {
      setCountryListInfo(countryListInfo);
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
    <CountrySelector info={ countryListInfo } />
  );
};

async function getCountryList() {
  const API = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(API);
    if (!response.ok) {
      throw new Error("Invalid response from server fetch");
    }
    return await response.json();
}


