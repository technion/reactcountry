import { Action, createStore, createTypedHooks } from 'easy-peasy';
import { CountryElem } from "./countryselector";

export interface StoreModel {
  selectedCountry: CountryElem | undefined;
  setSelectedCountry: Action<any, any>;
}

const model: StoreModel = {
  selectedCountry: undefined,
  setSelectedCountry: (state: any, payload: any) => {
    state.selectedCountry = payload;
  }
}

export const store = createStore(model);
export const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();
