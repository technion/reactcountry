import { Action, Thunk, createStore, createTypedHooks, thunk } from 'easy-peasy';
import { CountryElem } from "./countryselector";

type MaybeCountryElem = CountryElem | undefined;

export interface StoreModel {
  selectedCountry: MaybeCountryElem;
  setSelectedCountry: Action<StoreModel, MaybeCountryElem>;
}

const model: StoreModel = {
  selectedCountry: undefined,
  setSelectedCountry: (state, payload: MaybeCountryElem) => {
    state.selectedCountry = payload;
  }
}

export const store = createStore(model);
export const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();
