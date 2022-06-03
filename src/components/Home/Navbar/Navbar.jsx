import React from "react";

import { LinksContainer, NavbarContainer, StyledNavLink } from "./NavbarStyles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LinksContainer>
        <StyledNavLink to="/">Movies</StyledNavLink>
        <StyledNavLink to="/series">Series</StyledNavLink>
        <StyledNavLink to="/anime">Anime</StyledNavLink>
      </LinksContainer>
    </NavbarContainer>
  );
}
