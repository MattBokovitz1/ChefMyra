import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 50px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  color: ${(props) => props.theme.colors.accent};
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const ContactSubtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  margin-bottom: 50px;
`;

const EmailLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 20px;
`;

function Contact() {
  return (
    <ContactSection>
      <ContactTitle>Get in Touch</ContactTitle>
      <ContactSubtitle>
        Have a question or want to book a reservation? Send us a message!
      </ContactSubtitle>
      <EmailLink href="mailto:dillettm37@gmail.com?subject=Chef Myra Inquiry">
        <FontAwesomeIcon icon={faEnvelope} size="4x" />
      </EmailLink>
    </ContactSection>
  );
}

export default Contact;
