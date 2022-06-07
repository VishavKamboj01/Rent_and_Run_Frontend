import styled from "styled-components";
import colors from "../../utils/colors";
import { HiPlay } from "react-icons/hi";

export const BaseContainer = styled.div`
  width: 100%;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovieInfoBaseContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 450px;
  background-color: rgba(128, 128, 128, 0.15);
  box-shadow: 0 0 70px #212121;
`;

export const ContentInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 60px;
`;

export const ContentTitle = styled.h5`
  font-size: 2rem;
  margin: 0;
  color: white;
  position: relative;
  height: 45px;
  ::after {
    content: "";
    width: 160px;
    height: 1px;
    background-color: red;
    position: absolute;
    bottom: -5px;
    left: 0;
    opacity: 0.6;
  }
`;

export const ContentInfo = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  opacity: 0.6;
  font-size: 1.1rem;
  width: 600px;
  position: relative;

  ::after {
    content: "";
    width: 200px;
    height: 1px;
    background-color: red;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0.6;
  }
`;

export const DirectorCastInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  position: relative;

  ::after {
    content: "";
    width: 1px;
    height: 100px;
    background-color: red;
    position: absolute;
    left: -50px;

    opacity: 0.5;
  }
`;

export const KeyValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Key = styled.h6`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: white;
`;

export const Value = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  opacity: 0.6;
  font-size: 1.1rem;
  margin-left: 10px;
`;

export const TrailerBaseContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const Trailers = styled.div`
  display: flex;
  position: relative;
  ::after {
    content: "";
    width: 180px;
    height: 1px;
    background-color: red;
    position: absolute;
    bottom: -70px;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0.5;
  }
`;

export const TrailerCard = styled.div`
  width: 250px;
  height: 150px;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  z-index: 1;
  transition: 0.5s ease;
  :hover {
    transform: scale(1.3);
  }
`;

export const TrailerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const PlayIcon = styled(HiPlay)`
  z-index: 1;
  color: white;
  width: 60px;
  height: 60px;
  opacity: 0.6;
  transition: 0.5s ease;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
