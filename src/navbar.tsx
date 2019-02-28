import * as React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";

export const Navigation = () => {
  return (
    <Navbar className={Classes.DARK} fixedToTop={true}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Country Information</NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          href="http://blueprintjs.com/docs/v2/"
          text="Docs"
          target="_blank"
          minimal
          rightIcon="share"
        />
        <AnchorButton
          href="http://github.com/technion/reactcountry"
          text="Github"
          target="_blank"
          minimal
          rightIcon="code"
        />
      </NavbarGroup>
    </Navbar>
  );
};
