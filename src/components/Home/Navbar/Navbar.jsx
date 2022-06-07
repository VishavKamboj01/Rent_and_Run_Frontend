import React, { useState, useEffect, useCallback } from "react";

import {
  Icon,
  IconAndLinksContainer,
  IconContainer,
  LinksContainer,
  NavbarContainer,
  StyledNavLink,
  Title,
} from "./NavbarStyles";
import R from "../../../images/icons/r.png";
export default function Navbar() {
  return (
    <NavbarContainer>
      <IconAndLinksContainer>
        <IconContainer>
          {/* <Icon src={R} /> */}
          <Title>ReNt & RuN</Title>
        </IconContainer>
        <LinksContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/Movies">Movies</StyledNavLink>
          <StyledNavLink to="/series">Series</StyledNavLink>
          <StyledNavLink to="/anime">Anime</StyledNavLink>
        </LinksContainer>
      </IconAndLinksContainer>
    </NavbarContainer>
  );
}
