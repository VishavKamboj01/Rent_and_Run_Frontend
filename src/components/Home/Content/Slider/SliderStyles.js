import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 10px;
`;

export const Title = styled.h6`
  color: white;
  font-size: 1.5rem;
  padding: 20px 0;
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

  :hover {
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(55, 71, 79, 0.2) 100%
    );
    cursor: pointer;
  }
  position: absolute;
  display: flex;
  align-items: center;
  right: 5px;
  z-index: 1;
`;
