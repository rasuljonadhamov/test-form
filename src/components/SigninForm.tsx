import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import styled from "styled-components";

interface SignupFormProps {}

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 28px;
  gap: 36px;
  background-color: #fff;
  border-radius: 5px;
  width: 430px;
`;

const StyledInput = styled(TextField)`
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled(Button)`
  background-color: #6200ee;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #453ce6;
  }
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const SigninForm: React.FC<SignupFormProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form submitted with", { username, password, repeatPassword });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Sign in</StyledHeading>
      <StyledInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <StyledInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <StyledButton type="submit">Button</StyledButton>
      <StyledLink href="#">Already signed up? Go to sign up</StyledLink>
    </StyledForm>
  );
};

export default SigninForm;
