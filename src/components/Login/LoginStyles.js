import styled from "styled-components";

export const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  width: 45%;
  height: 60px;
  border-radius: 40px;
  box-shadow: 0 5px 20px #cfd9df;
  border: 0;
  transition: 0.4s ease;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
`;

export const TextField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  box-shadow: 0 5px 20px #cfd9df;
  border: 0;
  outline: none;
  text-align: left;
  text-indent: 65px;
  transition: 0.4s ease;
  position: absolute;
  left: 0;

  :focus {
    box-shadow: 0 10px 30px #cfd9df;
  }
`;

export const SideBanner = styled.div`
  width: 35%;
  height: 100vh;
  background-color: #ffe53b;
  background-image: linear-gradient(
    147deg,
    #ffe53b 0%,
    #ff2525 30%,
    #990000 100%
  );
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h4`
  font-weight: bold;
  margin: 0;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 60px;
`;

export const Text = styled.p`
  width: 80%;
  font-size: 1.4rem;
  margin: 0;
  color: white;
  opacity: 0.8;
`;

export const Button = styled.div`
  width: 20%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  margin-top: 40px;
  cursor: pointer;

  background-image: linear-gradient(
    90deg,
    #ffe53b 0%,
    #ff2525 30%,
    #990000 100%
  );
`;
