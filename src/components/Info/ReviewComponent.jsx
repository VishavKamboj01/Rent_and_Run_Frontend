import React from "react";
import {
  ReviewsContainer,
  Reviews,
  Review,
  InfoContainer,
  Title,
  Subtitle,
  ReviewText,
  Content,
  FullReviewButton,
} from "./ReviewStyles";
import { ContentTitle } from "./InfoStyles";
export default function ReviewComponent() {
  return (
    <ReviewsContainer>
      <Content>
        <ContentTitle>REVIEWS</ContentTitle>
        <Reviews>
          <Review>
            <InfoContainer>
              <Title>Person 1</Title>
              <Subtitle>California</Subtitle>
            </InfoContainer>
            <InfoContainer>
              <ReviewText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                atque cumque tempore placeat, eligendi earum similique quisquam,
                ipsum nam eaque suscipit nihil.
              </ReviewText>
              <FullReviewButton>Full Review</FullReviewButton>
            </InfoContainer>
          </Review>
          <Review>
            <InfoContainer>
              <Title>Person 1</Title>
              <Subtitle>California</Subtitle>
            </InfoContainer>
            <InfoContainer>
              <ReviewText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                atque cumque tempore placeat, eligendi earum similique quisquam,
                ipsum nam eaque suscipit nihil.
              </ReviewText>
              <FullReviewButton>Full Review</FullReviewButton>
            </InfoContainer>
          </Review>
          <Review>
            <InfoContainer>
              <Title>Person 1</Title>
              <Subtitle>California</Subtitle>
            </InfoContainer>
            <InfoContainer>
              <ReviewText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                atque cumque tempore placeat, eligendi earum similique quisquam,
                ipsum nam eaque suscipit nihil.
              </ReviewText>
              <FullReviewButton>Full Review</FullReviewButton>
            </InfoContainer>
          </Review>
        </Reviews>
      </Content>
    </ReviewsContainer>
  );
}
