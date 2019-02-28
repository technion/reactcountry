import React, { useState } from "react";
import { MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemPredicate, ItemRenderer } from "@blueprintjs/select";

import { useActions } from "./countrystore";

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

export const CountrySelector: React.FC<{ info: CountryElem[] }> = ({ info }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryElem | undefined>(undefined);
  const updateStore = useActions((actions) => actions.setSelectedCountry);
  const displayCountryInfo = (country: CountryElem) => {
    setSelectedCountry(country);
    updateStore(country);
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
