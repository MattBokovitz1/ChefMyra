import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WhiteLogo from "../images/whiteLogo.png";
import ContactPage from "./ContactPage";

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const HamburgerIcon = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  background-color: ${(props) => props.color || "#fff"};
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25%;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.visible ? "0" : "100%")});
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 5 15 0 0;
`;

const CloseIcon = styled.p`
  font-size: 3rem;
`;

const ListOfLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  list-style: none;
  margin: 0;
  padding: 0 0 20% 20%;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin: 0 0 0 0;
  padding: 10% 0 0 0;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

const SidebarLogo = styled.img`
  width: 50vh;
  display: flex;
`;

const HamburgerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 0 0 0 10%;
`;

function HamburgerMenu({ color, backgroundColor, children }) {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar}>
        <HamburgerIcon color={color} />
        <HamburgerIcon color={color} />
        <HamburgerIcon color={color} />
      </HamburgerButton>
      <Sidebar visible={visible} backgroundColor={backgroundColor}>
        <SidebarHeader>
          <div></div>
          <CloseButton onClick={toggleSidebar}>
            <CloseIcon color={color} visible={visible}>
              X
            </CloseIcon>
          </CloseButton>
        </SidebarHeader>
        <HamburgerInfo>
          <LinkWrapper to="/">
            <SidebarLogo
              src={WhiteLogo}
              alt="Chef Myra Dillett logo"
              onClick={toggleSidebar}
            />
          </LinkWrapper>
          <ListOfLinks>
            <LinkStyle to="/personal-chef" onClick={toggleSidebar}>
              Personal Chef
            </LinkStyle>
            <LinkStyle to="/event-coordinator" onClick={toggleSidebar}>
              Event Coordinator
            </LinkStyle>
            <LinkStyle to="/contact" onClick={toggleSidebar}>
              Contact
            </LinkStyle>
          </ListOfLinks>
          <ContactPage />
        </HamburgerInfo>
      </Sidebar>
    </>
  );
}

export default HamburgerMenu;
