import React from "react";
import {
  ContentInfoContainer,
  ContentTitle,
  TrailerBaseContainer,
  TrailerCard,
  TrailerImage,
  Trailers,
} from "./InfoStyles";
import { BiChevronRight } from "react-icons/bi";

export default function Photos({ image }) {
  return (
    <TrailerBaseContainer>
      <ContentInfoContainer>
        <ContentTitle>PHOTOS</ContentTitle>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Trailers>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
          </Trailers>
          <Trailers>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
            <TrailerCard>
              <TrailerImage src={image} />
            </TrailerCard>
          </Trailers>
        </div>
        <BiChevronRight size={40} color="white" style={{ marginTop: 150 }} />
      </ContentInfoContainer>
    </TrailerBaseContainer>
  );
}
