import React, { useState } from "react";
import {
  BaseContainer,
  Button,
  Content,
  FormContainer,
  SideBanner,
  Text,
  TextField,
  TextFieldContainer,
  Title,
} from "./LoginStyles";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import colors from "../../utils/colors";
export default function Form({ type }) {
  const [eyeClick, setEyeClick] = useState(false);

  return (
    <BaseContainer>
      <FormContainer>
        <Title style={{ color: "black", opacity: 0.9 }}>
          {type === "login" ? "Hello!" : "Hello, Friend!"}
        </Title>

        {type === "register" && (
          <TextFieldContainer>
            <FaUserCircle
              size={40}
              color={colors.red}
              style={{ zIndex: 1, marginLeft: 15 }}
            />
            <TextField placeholder="Name" />
          </TextFieldContainer>
        )}

        <TextFieldContainer>
          <MdEmail
            size={40}
            color={colors.red}
            style={{ zIndex: 1, marginLeft: 15 }}
          />
          <TextField placeholder="Email" type="email" />
        </TextFieldContainer>
        <TextFieldContainer>
          <RiLockPasswordFill
            size={40}
            color={colors.red}
            style={{ zIndex: 1, marginLeft: 15 }}
          />
          <TextField
            placeholder="Password"
            type={eyeClick ? "text" : "password"}
          />
          {eyeClick ? (
            <AiFillEye
              onClick={() => setEyeClick(false)}
              size={40}
              color={colors.red}
              style={{ zIndex: 1, marginRight: 15, cursor: "pointer" }}
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setEyeClick(true)}
              size={40}
              color={colors.red}
              style={{ zIndex: 1, marginRight: 15, cursor: "pointer" }}
            />
          )}
        </TextFieldContainer>
        <Button>{type === "register" ? "CREATE ACCOUNT" : " LOGIN"}</Button>
      </FormContainer>
      <SideBanner>
        <Content>
          <Title>
            {type === "register" ? "Glad to see you!" : "Welcome Back!"}
          </Title>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur dicta vel eligendi mollitia non ea,
          </Text>
        </Content>
      </SideBanner>
    </BaseContainer>
  );
}
