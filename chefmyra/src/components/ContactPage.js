import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 42%;
  padding: 1% 0;
  background: ${(props) => props.theme.colors.white};
`;

const SocialLink = styled.a`
  margin: 0 3%;
`;

const ContactPage = () => {
  return (
    <>
      <SocialLinksContainer>
        <SocialLink
          href="https://www.instagram.com/chef_myra_dillett/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} alt="Instagram" size="4x" />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/littledill37"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} alt="Facebook" size="4x" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/myra-dillett-73917ab1/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" size="4x" />
        </SocialLink>
      </SocialLinksContainer>
    </>
  );
};

export default ContactPage;
