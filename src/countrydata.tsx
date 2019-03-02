import React, { useState } from "react";
import {
  Button,
  Classes,
  Dialog,
} from "@blueprintjs/core";

import { useStore, useActions } from "./countrystore";

export const CountryData = () => {
  const country = useStore(state => state.selectedCountry);
  const updateStore = useActions((actions) => actions.setSelectedCountry);

  // Closing this dialog empties out the country info from global state. This page will rerender and return null.
  const closeCountryInfo = () => {
        updateStore(undefined);
  };
  if (!country) {
    return null;
  }

  // Demonstrating an inline style. In a real application we would aim be consistent and use a .css file
  const imgstyle = { width: "100%", paddingTop: "10px" };
  return (
    <Dialog
      icon="info-sign"
      title="Information for country"
      isOpen={true}
      onClose={() => {
        closeCountryInfo();
      }}
    >
      <div className={Classes.DIALOG_BODY}>
        Welcome to the information page for the country of {country.name}.
        <br />
        The population is {country.population.toLocaleString()} and its capital is {country.capital}.
        <br />
        You may be interested in the country flag:
        <img src={country.flag} style={imgstyle} />
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button
              onClick={() => {
                closeCountryInfo();
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
