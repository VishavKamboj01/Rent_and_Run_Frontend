import React from "react";
import { useLocation } from "react-router-dom";
import ContentCard from "../Home/Content/ContentCard";
import { BiChevronRight } from "react-icons/bi";

import {
  BaseContainer,
  ContentInfo,
  MovieInfoBaseContainer,
  ContentInfoContainer,
  ContentTitle,
  DirectorCastInfo,
  InfoSection,
  Key,
  KeyValueContainer,
  Value,
  TrailerBaseContainer,
  TrailerCard,
  TrailerImage,
  PlayIcon,
  Trailers,
} from "./InfoStyles";
import ReviewComponent from "./ReviewComponent";
import Photos from "./Photos";

export default function Info() {
  const location = useLocation();
  const { title, image, rating } = location.state;
  return (
    <BaseContainer>
      <ContentCard title={title} image={image} rating={rating} />;
      <InfoSection>
        <MovieInfoBaseContainer style={{ marginTop: 100 }}>
          <ContentInfoContainer>
            <ContentTitle>MOVIE INFO</ContentTitle>
            <ContentInfo>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              voluptatem et sequi necessitatibus voluptates perspiciatis,
              consequuntur iste asperiores aspernatur, quo, nobis praesentium
              dolorum quibusdam hic. Blanditiis molestias eligendi nam
              provident! Voluptatum animi ipsa pariatur sapiente eos debitis,
              provident soluta perspiciatis, consectetur aperiam totam ratione
              minima blanditiis nostrum maxime ipsum dolore delectus fugit vel
              dolor facere! Suscipit asperiores nostrum ipsa numquam!
            </ContentInfo>
            <DirectorCastInfo>
              <KeyValueContainer>
                <Key>Director</Key>
                <Value>Vishavjeet Singh</Value>
              </KeyValueContainer>
              <KeyValueContainer>
                <Key>Writer</Key>
                <Value>Someone else</Value>
              </KeyValueContainer>
              <KeyValueContainer>
                <Key>Stars</Key>
                <Value>Person1, Person2, Person3</Value>
              </KeyValueContainer>
            </DirectorCastInfo>
          </ContentInfoContainer>
        </MovieInfoBaseContainer>
        <TrailerBaseContainer>
          <ContentInfoContainer>
            <ContentTitle>TRAILERS</ContentTitle>
            <Trailers>
              <TrailerCard>
                <TrailerImage src={image} />
                <PlayIcon />
              </TrailerCard>
              <TrailerCard>
                <TrailerImage src={image} />
                <PlayIcon />
              </TrailerCard>
              <TrailerCard>
                <TrailerImage src={image} />
                <PlayIcon />
              </TrailerCard>
            </Trailers>
            <BiChevronRight size={40} color="white" style={{ marginTop: 50 }} />
          </ContentInfoContainer>
        </TrailerBaseContainer>
        <MovieInfoBaseContainer>
          <ReviewComponent />
        </MovieInfoBaseContainer>
        <Photos image={image} />
      </InfoSection>
    </BaseContainer>
  );
}
