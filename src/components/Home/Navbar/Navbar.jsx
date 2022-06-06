import React, { useState, useEffect, useCallback } from "react";

import { LinksContainer, NavbarContainer, StyledNavLink } from "./NavbarStyles";

export default function Navbar() {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <NavbarContainer>
      <LinksContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/Movies">Movies</StyledNavLink>
        <StyledNavLink to="/series">Series</StyledNavLink>
        <StyledNavLink to="/anime">Anime</StyledNavLink>
      </LinksContainer>
    </NavbarContainer>
  );
}
