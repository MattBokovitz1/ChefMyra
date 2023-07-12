import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TealLogo from "../images/tealLogo.png";
import HamburgerMenu from "./HamburgerMenu";

const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5% 0 0;
`;

const NavLogo = styled.img`
  width: 40vh;
`;

const Myra = styled.h1`
  margin: 0 0 0 -15%;
  color: ${(props) => props.theme.colors.white};
  font-family: "Caveat", cursive;
  font-size: 3.5rem;
  font-weight: 700;
  position: absolute left: 50% margin-left: -50px;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const M = styled.span`
  font-family: ${(props) => props.theme.fonts.cursive};
  font-size: 6rem;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <LinkWrapper to="/">
        <NavLogo src={TealLogo} alt="Chef Myra Dillett logo" />
      </LinkWrapper>
      <Myra>
        <M>M</M>yra Dillett
      </Myra>
      <HamburgerMenu />
    </HeaderDiv>
  );
};

export default Header;
