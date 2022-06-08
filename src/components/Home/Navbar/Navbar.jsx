import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  Icon,
  IconAndLinksContainer,
  IconContainer,
  LinksContainer,
  NavbarContainer,
  StyledNavLink,
  Title,
  LoginButton,
  RegisterButton,
} from "./NavbarStyles";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

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
        <div>
          <LoginButton onClick={handleLoginClick}>LOGIN</LoginButton>
          <RegisterButton onClick={handleRegisterClick}>
            REGISTER
          </RegisterButton>
        </div>
      </IconAndLinksContainer>
    </NavbarContainer>
  );
}
