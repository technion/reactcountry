import React from "react";
import { useStore } from "./countrystore";

export const CountryData = () => {
  const country = useStore(state => state.selectedCountry);
  if (!country) {
    return ( <> "Test string" </> );
  }

  return (
    <>
    {country.name}
    </>
  );
}

