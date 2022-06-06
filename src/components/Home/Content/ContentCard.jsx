import React from "react";
import {
  BottomContainer,
  ButtonsContainer,
  BuyNowButton,
  Card,
  ImdbIcon,
  InfoContainer,
  MovieImage,
  RatingContainer,
  RatingText,
  RentNowButton,
  Title,
  Year,
} from "./ContentCardStyles";
import imdb from "../../../images/icons/imdb.png";

export default function ContentCard({ image, title, rating }) {
  return (
    <Card>
      <MovieImage src={image} />
      <BottomContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Year>2021</Year>
          <RatingContainer>
            <ImdbIcon src={imdb} />
            <RatingText>{rating} rating</RatingText>
          </RatingContainer>
        </InfoContainer>
        <ButtonsContainer>
          <BuyNowButton>BUY NOW</BuyNowButton>
          <RentNowButton>RENT NOW</RentNowButton>
        </ButtonsContainer>
      </BottomContainer>
    </Card>
  );
}
