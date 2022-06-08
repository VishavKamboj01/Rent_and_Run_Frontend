import styled from "styled-components";

export const ReviewsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-right: 50px;
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ::after {
    content: "";
    width: 200px;
    height: 1px;
    background-color: red;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0.6;
  }
`;

export const Review = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;

export const Title = styled.h5`
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  opacity: 0.4;
`;

export const ReviewText = styled.p`
  margin: 0;
  padding: 0;
  width: 700px;
  color: white;
  font-size: 1.1rem;
  opacity: 0.9;
`;

export const FullReviewButton = styled.p`
  font-size: 1.2rem;
  text-decoration: underline;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  font-weight: bolder;
`;
