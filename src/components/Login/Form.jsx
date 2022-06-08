import React, { useState } from "react";
import {
  BaseContainer,
  Button,
  Content,
  Error,
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

import Joi from "joi";

import colors from "../../utils/colors";
export default function Form({ type }) {
  const [eyeClick, setEyeClick] = useState(false);

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const RegisterSchema = Joi.object({
    name: Joi.string().min(4).required().label("Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  });

  const LoginSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  });

  const handleNameChange = (event) => {
    const newName = {
      value: event.currentTarget.value,
      error: "",
    };

    const nameSchema = Joi.string().min(4).required();
    const { error } = nameSchema.validate(newName.value);
    if (error) newName.error = error.message;

    setName(newName);
  };

  const handleEmailChange = (event) => {
    const newEmail = {
      value: event.currentTarget.value,
      error: "",
    };

    const EmailSchema = Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email");

    const { error } = EmailSchema.validate(newEmail.value);
    if (error) newEmail.error = error.message;

    setEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = {
      value: event.currentTarget.value,
      error: "",
    };

    const PasswordSchema = Joi.string().min(8).required().label("Password");

    const { error } = PasswordSchema.validate(newPassword.value);
    if (error) newPassword.error = error.message;

    setPassword(newPassword);
  };

  const handleButtonClick = () => {
    if (type === "register") {
      const { error } = RegisterSchema.validate({
        name: name.value,
        email: email.value,
        password: password.value,
      });

      console.log(error);
      if (!error) sendRegisterRequest();
    } else {
      const { error } = LoginSchema.validate({
        email: email.value,
        password: password.value,
      });
      if (!error) sendLoginRequest();
    }
  };

  const sendLoginRequest = () => {
    console.log("Sending Login request...");
  };

  const sendRegisterRequest = () => {
    console.log("Sending Register request...");
  };

  return (
    <BaseContainer>
      <FormContainer>
        <Title style={{ color: "black", opacity: 0.9 }}>
          {type === "login" ? "Hello!" : "Hello, Friend!"}
        </Title>

        {type === "register" && (
          <TextFieldContainer>
            {name.error !== "" && <Error>{name.error}</Error>}
            <FaUserCircle
              size={40}
              color={colors.red}
              style={{ zIndex: 1, marginLeft: 15 }}
            />
            <TextField placeholder="Name" onChange={handleNameChange} />
          </TextFieldContainer>
        )}

        <TextFieldContainer>
          {email.error !== "" && <Error>{email.error}</Error>}
          <MdEmail
            size={40}
            color={colors.red}
            style={{ zIndex: 1, marginLeft: 15 }}
          />
          <TextField
            placeholder="Email"
            type="email"
            onChange={handleEmailChange}
          />
        </TextFieldContainer>
        <TextFieldContainer>
          {password.error !== "" && <Error>{password.error}</Error>}
          <RiLockPasswordFill
            size={40}
            color={colors.red}
            style={{ zIndex: 1, marginLeft: 15 }}
          />
          <TextField
            placeholder="Password"
            type={eyeClick ? "text" : "password"}
            onChange={handlePasswordChange}
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
        <Button onClick={handleButtonClick}>
          {type === "register" ? "CREATE ACCOUNT" : " LOGIN"}
        </Button>
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
