import React from "react";
import styled from "styled-components";
import cocktailhour from "../images/wedding-cocktailhour.jpg";

const EventWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 100%;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.accent};
  color: #fff;
  text-align: center;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-top: 20px;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #fff;
`;

const Section = styled.section`
  flex: 1;
  margin-right: 50px;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const SectionImage = styled.img`
  width: 100%;
  height: 20vh
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const AboutSection = styled(Section)`
  text-align: left;
  margin-right: 0;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

// const Cocktail = styled.img`
//   margin: 0 -50 0 0;
//   padding: 0;
//   max-width: 100%;
//   border-radius: 10px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
//   height: 80vh;
//   width: 100vw;
// `;
function EventCoordinator() {
  return (
    <>
      <EventWrapper>
        <Header>
          <Title>Event Coordinator</Title>
          <Subtitle>Let us help make your event unforgettable</Subtitle>
        </Header>
        <Main>
          <Section>
            <SectionTitle>Weddings</SectionTitle>
            <SectionImage src={cocktailhour} alt="Wedding" />
          </Section>
          <AboutSection>
            <SectionTitle>About Us</SectionTitle>
            <AboutText>
              Experienced in planning and executing events of all sizes, we
              offer a variety of services to help you plan your next event.
              Whether you need help with a wedding, birthday party, or family
              gathering, we can help you plan and execute your event.
            </AboutText>
          </AboutSection>
          <Section>
            <SectionTitle>Parties</SectionTitle>
            <SectionImage
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZyUyMHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Party"
            />
          </Section>
        </Main>
      </EventWrapper>
    </>
  );
}

export default EventCoordinator;
