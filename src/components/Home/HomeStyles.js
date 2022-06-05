import styled from "styled-components";
import colors from "../../utils/colors";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${colors.primary};
`;

export const NewArrivalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.primary};
`;

export const Title = styled.div`
  color: white;
  font-size: 1.3rem;
  margin-left: 20px;
`;

export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
