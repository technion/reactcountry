import React, { useState } from "react";
import {
  Button,
  Classes,
  Dialog,
} from "@blueprintjs/core";

import { useStore } from "./countrystore";

export const CountryData = () => {
  const country = useStore(state => state.selectedCountry);
  const [open, setOpen] = useState(true);
  if (!country) {
    return null;
  }

  return (
    <Dialog
      icon="info-sign"
      title="Information for country"
      isOpen={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className={Classes.DIALOG_BODY}>
        Welcome to the information regarding: {country.name}
        You may be interested in the country flag: {country.flag}
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button
              onClick={() => {
                setOpen(false);
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
