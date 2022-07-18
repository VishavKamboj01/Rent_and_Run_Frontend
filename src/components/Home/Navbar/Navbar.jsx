import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
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

import { HiMenu } from "react-icons/hi";

export default function Navbar({ onMenuClick, type, onMenuItemSelected }) {
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

          {type !== "all" && (
            <Dropdown style={{ marginTop: 10 }}>
              <Dropdown.Toggle
                style={{
                  background: "white",
                  color: "black",
                  opacity: 0.6,
                  border: "1px solid black",
                }}
                id="dropdown-basic"
              >
                {type + " Genre"}
              </Dropdown.Toggle>

              <Dropdown.Menu onClick={onMenuItemSelected}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Adventure</Dropdown.Item>
                <Dropdown.Item>Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </IconContainer>
        <LinksContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/Movies">Movies</StyledNavLink>
          <StyledNavLink to="/series">Series</StyledNavLink>
          <StyledNavLink to="/anime">Anime</StyledNavLink>
        </LinksContainer>

        <div style={{ marginRight: 20 }}>
          <LoginButton onClick={handleLoginClick}>LOGIN</LoginButton>
          <RegisterButton onClick={handleRegisterClick}>
            REGISTER
          </RegisterButton>
        </div>
      </IconAndLinksContainer>
    </NavbarContainer>
  );
}
