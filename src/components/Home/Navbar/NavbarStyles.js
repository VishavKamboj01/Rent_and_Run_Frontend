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
  display: flex;
  flex-direction: column;
`;

export const IconAndLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
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

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;

  color: white;
  background-image: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  margin-right: 50px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LoginButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 30px;
  background-color: white;
  opacity: 0.7;
  border: 0;
  margin: 0;
  margin-right: 20px;
  font-weight: bold;
`;

export const RegisterButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 30px;
  background-color: red;
  opacity: 0.6;
  font-weight: bold;
  border: 0;
  margin: 0;
`;
