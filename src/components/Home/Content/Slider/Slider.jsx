import React from "react";
import {
  BaseContainer,
  Card,
  Image,
  LeftArrowContainer,
  RightArrowContainer,
  SliderContainer,
  Title,
} from "./SliderStyles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// Import Swiper styles

import "swiper/css";

export default function Slider({ items, title }) {
  let swiper = useSwiper();

  return (
    <BaseContainer>
      <Title>{title}</Title>
      <SliderContainer>
        <LeftArrowContainer>
          <FaAngleLeft size={70} color="white" style={{ opacity: 0.6 }} />
        </LeftArrowContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item) => (
            <SwiperSlide key={item.image}>
              <Card>
                <Image src={item.image} />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <RightArrowContainer onClick={() => swiper.slideNext()}>
          <FaAngleRight size={70} color="white" style={{ opacity: 0.6 }} />
        </RightArrowContainer>
      </SliderContainer>
    </BaseContainer>
  );
}
