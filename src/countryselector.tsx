import React, { useState, useEffect, Fragment } from "react";
import { MenuItem, Button } from "@blueprintjs/core";
import { Select, ItemPredicate, ItemRenderer } from "@blueprintjs/select";


type CountryElem = {
  name: string;
  flag: string;
  alpha2Code: string;
}

const CountrySelect = Select.ofType<CountryElem>();
const renderCountry: ItemRenderer<CountryElem> = (country,  { handleClick, modifiers, query }) => {
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
 
const handleValueChange = (country: CountryElem) => { console.log(country.name) };
export const CountrySelector: React.FC<{ info: CountryElem[] }> = ({ info }) => {
  return (
    <div>
    <CountrySelect
      items={info}
      itemRenderer={renderCountry} 
      onItemSelect={handleValueChange}      
    >
    <Button text={info[0].name} rightIcon="double-caret-vertical" />
    </CountrySelect>
    </div>
  );
};

