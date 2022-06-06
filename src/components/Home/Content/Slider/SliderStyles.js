import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import colors from "../../../../utils/colors";

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h6`
  color: white;
  font-size: 1.5rem;
  padding: 20px 0;
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  cursor: pointer;
  margin-right: 10px;
  :hover {
    transition: 0.5s ease;
    opacity: 1;
  }
`;
export const Text = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0;
  margin-left: 2px;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const Card = styled(SwiperSlide)`
  width: 360px;
  height: 230px;
  position: relative;
`;

export const Mark = styled.div`
  width: 50px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px gray;
`;

export const InfoButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s linear;

  box-shadow: 0 0 10px #eee;

  :hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const LeftArrowContainer = styled.div`
  width: 70px;
  height: 250px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(55, 71, 79, 0) 100%
  );
  position: absolute;
  left: 0;
  z-index: 10;
  transition: 0.5s ease;

  :hover {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(55, 71, 79, 0.2) 100%
    );
    cursor: pointer;
  }
`;

export const RightArrowContainer = styled.div`
  width: 70px;
  height: 250px;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(55, 71, 79, 0) 100%
  );
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  right: 5px;
  z-index: 1;

  :hover {
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(55, 71, 79, 0.2) 100%
    );
  }
`;
