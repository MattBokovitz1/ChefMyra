import React from "react";
import styled from "styled-components";
import profile from "../images/Myra_profile.jpg";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  max-width: 50%;
  padding: 0 15% 0 25%;
`;

const Text = styled.p`
  line-height: 1.5;
  padding: 0 20% 0 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const AboutSection = styled.div`
  padding: 0 0 0 5%;
`;

const PersonalContent = () => {
  return (
    <Content>
      <div>
        <Image src={profile} alt="Myra's profile picture" />
      </div>
      <AboutSection>
        <Title>Myra here...</Title>
        <Text>
          I want to empower others to smile and I do that through culinary and
          hospitality. Camaraderie, unity, and friendship are desired by all,
          and food provides the perfect opportunity for these values. This is my
          passion! I place my heart and soul into my work and feel you should
          taste and see my secret ingredient, which is love.
          <br /> <br />
          When I first started out in culinary, I was intrigued and inspired. My
          sister, Rebecca drew out that interest and developed it into a passion
          and many of my family and friends did the same. My passion led me to
          choosing culinary and hospitality as a career. Through these
          experiences, I developed an appreciation of different ethnic
          restaraunts. I grew up with the drive to work well and to see small
          details as important. The small details are what I love most about the
          Culinary Hospitality industry.
        </Text>
      </AboutSection>
    </Content>
  );
};

export default PersonalContent;
