import React from "react";
import { BaseContainer, Card, SliderContainer, Title } from "./SliderStyles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Slider({ items }) {
  return (
    <BaseContainer>
      <Title>New Arrivals</Title>
      <SliderContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item) => (
            <SwiperSlide style={{ width: 300, height: 150 }}>
              <Card src={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </BaseContainer>
  );
}
