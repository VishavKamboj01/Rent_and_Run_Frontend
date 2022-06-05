import styled from "styled-components";
import colors from "../../../utils/colors";

export const Card = styled.div`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: relative;
  overflow: hidden;
`;

export const MovieImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(55, 71, 79, 0) 100%
  );
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 50px;
  margin-bottom: 50px;
`;

export const Title = styled.h6`
  font-size: 4rem;
  color: white;
  margin: 0;
`;

export const Year = styled.p`
  font-size: 2rem;
  color: white;
  margin: 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImdbIcon = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 10px;
`;

export const RatingText = styled.p`
  font-size: 2rem;
  color: white;
  padding: 0;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

export const BuyNowButton = styled.button`
  width: 240px;
  height: 55px;
  background: red;
  color: white;
  border-radius: 20px;
  font-weight: bold;
  border: 0;
  opacity: 0.8;
  margin-right: 20px;

  :hover {
    opacity: 0.9;
    transition: 0.5s ease-in-out;
  }
`;

export const RentNowButton = styled.button`
  width: 240px;
  height: 55px;
  background: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  color: black;
  border-radius: 20px;
  border: 0;

  :hover {
    background: rgba(255, 255, 255, 0.9);
    transition: 0.5s ease-in-out;
  }
`;
