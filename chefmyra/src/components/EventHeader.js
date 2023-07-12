import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/honey_im_subtle.png");
  background-color: #f06d70;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-top: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

function EventHeader() {
  return (
    <Header>
      <Title>Event Coordinator</Title>
      <Subtitle>Let us help make your event unforgettable</Subtitle>
    </Header>
  );
}

export default EventHeader;
