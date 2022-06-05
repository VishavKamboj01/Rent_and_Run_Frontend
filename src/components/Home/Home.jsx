import React, { useEffect, useState } from "react";
import { ContentContainer, HomeContainer, Section, Title } from "./HomeStyles";
import { moviesDataWide, animeDataWide } from "../../service/http";
import ContentCard from "./Content/ContentCard";
import { Carousel } from "react-bootstrap";
import Slider from "./Content/Slider/Slider";

export default function Home({ type }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    //Get the data.
    if (type === "movies") setData(moviesDataWide);
    else setData(animeDataWide);
  }, [type]);

  return (
    <HomeContainer>
      <ContentContainer>
        <Carousel variant="dark" touch={true} slide={true} interval={2000}>
          {data.map((item) => (
            <Carousel.Item>
              <ContentCard image={item.image} title={item.title} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Section>
          <Slider items={data} title="New Arrivals" />
        </Section>
        <Section>
          <Slider items={data} title="Trending Now" />
        </Section>
      </ContentContainer>
    </HomeContainer>
  );
}
