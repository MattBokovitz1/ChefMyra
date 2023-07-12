import React from "react";
import styled from "styled-components";
import personalChefPictures from "../data/personalChefPictures";
import cocktailhour from "../images/wedding-cocktailhour.jpg";

const FoodImages = styled.img`
  width: 35vw;
  height: 55vh;
  padding: 3% 5%;
  justify-content: space-around;
`;

const PictureDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5%;
`;

const PersonalChefTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  padding: 1% 0;
  color: ${(props) => props.theme.colors.primary};
`;

const PersonalChefText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  padding: 1% 0;
  color: ${(props) => props.theme.colors.primary};
`;

const PersonalChefDiv = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  padding: 1% 0;
`;

const CocktailHour = styled.img`
  width: 75vw;
  height: 55vh;
  justify
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding: 0 0 3% 0;
`;

function PersonalChef() {
  return (
    <>
      <PersonalChefDiv>
        <PersonalChefTitle>Personal Chef</PersonalChefTitle>
        <PersonalChefText>
          Currently can manage 50-75 guests. Local and Dependable, Myra offers
          in home events, drop off meals, and more!
        </PersonalChefText>
      </PersonalChefDiv>
      <PersonalChefDiv>
        <PictureDiv>
          {personalChefPictures.map((image) => (
            <FoodImages key={image.id} src={image.image} alt={image.alt} />
          ))}
        </PictureDiv>
      </PersonalChefDiv>
      <ImageDiv>
        <CocktailHour src={cocktailhour} alt="cocktail hour" />
      </ImageDiv>
    </>
  );
}

export default PersonalChef;
