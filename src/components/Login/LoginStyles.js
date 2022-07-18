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
  width: 550px;
  height: 60px;
  border-radius: 40px;
  box-shadow: 0 0px 40px #cfd9df;
  border: 0;
  transition: 0.4s ease;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;

  :hover {
    transform: scale(1.05);
  }
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
    box-shadow: 0 10px 50px #cfd9df;
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

export const LoginFooter = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const BottomText = styled.p`
  opacity: 0.8;
  font-size: 1.3rem;
  margin: 0;
`;

export const LoginText = styled.h5`
  opacity: 0.8;
  color: red;
  text-decoration: underline;
  margin: 0;
  margin-left: 10px;
  cursor: pointer;
`;

export const Button = styled.div`
  width: 250px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  margin-top: 40px;
  cursor: pointer;
  box-shadow: 0 10px 10px #cfd9df;

  background-image: linear-gradient(
    90deg,
    #ffe53b 0%,
    #ff2525 30%,
    #990000 100%
  );

  transition: 0.5s ease;
  :hover {
    transform: scale(1.1);
  }
`;

export const Error = styled.div`
  padding: 1px 10px;
  position: absolute;
  top: -40px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 15px;
  transition: 0.5s ease;
  z-index: 10;

  ::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.8);
    clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
  }
`;
