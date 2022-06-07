import React, { useEffect, useState } from "react";
import { ContentContainer, HomeContainer, Section, Title } from "./HomeStyles";
import { moviesDataWide, animeDataWide, mixData } from "../../service/http";
import ContentCard from "./Content/ContentCard";
import { Carousel } from "react-bootstrap";
import Slider from "./Content/Slider/Slider";

export default function Home({ type }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    //Get the data.
    if (type === "movies") setData(moviesDataWide);
    else if (type === "anime") setData(animeDataWide);
    else setData(mixData);
  }, [type]);

  return (
    <HomeContainer>
      <ContentContainer>
        <Carousel variant="dark" touch={true} slide={true} interval={2000}>
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <ContentCard
                image={item.image}
                title={item.title}
                rating={item.rating}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Section>
          <Slider
            items={type === "all" ? moviesDataWide : data}
            title={type === "all" ? "Movies" : "New Arrivals"}
            type={type}
          />
        </Section>
        <Section>
          <Slider
            items={type === "all" ? animeDataWide : data}
            title={type === "all" ? "Anime" : "Trending Now"}
            type={type}
          />
        </Section>

        <Section>
          <Slider items={data} title="Top Rated" type={type} />
        </Section>
      </ContentContainer>
    </HomeContainer>
  );
}
