import React, { useState } from "react";
import { MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemPredicate, ItemRenderer } from "@blueprintjs/select";

import { useActions, useStore } from "./countrystore";

export type CountryElem = {
  name: string;
  flag: string;
  alpha2Code: string;
};

// All these functions relate to Blueprint's select component: https://blueprintjs.com/docs/#select/select-component
const CountrySelect = Select.ofType<CountryElem>();
const renderCountry: ItemRenderer<CountryElem> = ( country, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={country.alpha2Code}
      key={country.alpha2Code}
      onClick={handleClick}
      text={country.name}
    />
  );
};

export const CountrySelector: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryElem | undefined>(undefined);
  const info = useStore((state) => state.countryList);
  const updateStore = useActions((actions) => actions.setSelectedCountry);
  const displayCountryInfo = (country: CountryElem) => {
    setSelectedCountry(country);
    updateStore(country);
  };
  if (info === undefined) {
    return ( <> "not loaded" </> );
  };

  return (
    <div>
      <CountrySelect
        items={info}
        itemRenderer={renderCountry}
        onItemSelect={displayCountryInfo}
      >
        <Button
          text={selectedCountry ? `${selectedCountry.name}` : "Please select"}
          rightIcon="double-caret-vertical"
        />
      </CountrySelect>
    </div>
  );
};
