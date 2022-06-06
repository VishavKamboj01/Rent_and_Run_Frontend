import styled from "styled-components";
import colors from "../../../utils/colors.js";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: lightgray;
  text-decoration: none;
  margin: 10px;
  font-size: 1.2rem;
  &.active {
    color: white;
  }

  :hover {
    color: white;
  }
`;
