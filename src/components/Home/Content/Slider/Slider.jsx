import React, { useRef, useCallback, useState } from "react";
import {
  BaseContainer,
  Card,
  Image,
  LeftArrowContainer,
  RightArrowContainer,
  SeeMoreContainer,
  SliderContainer,
  Title,
  Text,
  TitleContainer,
  Mark,
  InfoButton,
} from "./SliderStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import colors from "../../../../utils/colors.js";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import { Navigate, useNavigate } from "react-router-dom";

export default function Slider({ items, title, type }) {
  const navigate = useNavigate();
  const [endReached, setEndReached] = useState(false);
  let sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleInfoClick = (item) => {
    console.log(item);
    navigate("/" + type + "/" + item.id, { state: item });
  };

  return (
    <BaseContainer>
      <TitleContainer>
        <Title>{title}</Title>
        {endReached && (
          <SeeMoreContainer>
            <Text>See More</Text>
            <FaAngleRight size={25} color="white" />
          </SeeMoreContainer>
        )}
      </TitleContainer>
      <SliderContainer>
        <LeftArrowContainer onClick={handlePrev}>
          <FaAngleLeft size={70} color="white" style={{ opacity: 0.6 }} />
        </LeftArrowContainer>
        <Swiper
          ref={sliderRef}
          modules={[Navigation]}
          spaceBetween={7}
          slidesPerView={5}
          slidesPerGroup={7}
          onSlideChange={() => console.log("slide change")}
          onReachEnd={() => setEndReached(true)}
          lazy={true}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Card>
                <Mark>
                  <FaStar size={15} color="yellow" />
                  <Text style={{ fontSize: "0.9rem" }}>{item.rating}</Text>
                </Mark>
                <Image src={item.image} />
                <InfoButton onClick={() => handleInfoClick(item)}>
                  <BsInfoCircle size={30} color="black" />
                </InfoButton>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <RightArrowContainer onClick={handleNext}>
          <FaAngleRight size={70} color="white" style={{ opacity: 0.6 }} />
        </RightArrowContainer>
      </SliderContainer>
    </BaseContainer>
  );
}
