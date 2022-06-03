import styled from "styled-components";
import colors from "../../../utils/colors.js";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.primary};
  position: fixed;
  top: 0;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${colors.gray};
  text-decoration: none;
  margin: 10px;
  font-size: 1.2rem;
  &.active {
    color: white;
  }
`;
