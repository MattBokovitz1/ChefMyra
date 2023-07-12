import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.accent};
  font-family: "Caveat", cursive;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
`;

const Footer = () => {
  return <FooterStyle>Myra Dillett LLC | 2023</FooterStyle>;
};

export default Footer;
