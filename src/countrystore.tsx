import { Action, Thunk, createStore, createTypedHooks, thunk } from 'easy-peasy';
import { CountryElem } from "./countryselector";

export interface StoreModel {
  selectedCountry: CountryElem | undefined;
  setSelectedCountry: Action<any, any>;
  countryList: CountryElem[] | undefined;
  initialiseCountryList: Thunk;
  setCountryList: Action<any, any>;
}

const model: StoreModel = {
  selectedCountry: undefined,
  setSelectedCountry: (state: any, payload: any) => {
    state.selectedCountry = payload;
  },
  countryList: undefined,
  initialiseCountryList: thunk(async (actions: any, payload) => {
    const countryList = await getCountryList();
    actions.setCountryList(countryList);
  }),
  setCountryList: (state: any, payload: any) => {
    state.countryList = payload;
  }
}

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

export const store = createStore(model);
export const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();
