import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import image from "../assets/login.png";
import { Input } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { appReducers } from "../Redux/selector";
import { useAuthHooks } from "../Redux/hooks/authHooks";
const CustomHeading = styled(Box)`
  color: white;
  font-size: 35px;
  font-family: Inter;
  font-weight: 400;
  padding-top: 20px;
  padding-left: 20px;
  line-height: 51px;
  font-family: Arial;
  letter-spacing: 0.03em;
`;
const LeftBox = styled(Box)`
  background-color: #5352ed;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;
const RightBox = styled(Box)`
  display: flex;
  padding-top: 50px;
`;
const CustomBox = styled(Box)`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
  max-width: 1450px;
`;
const SignUpBox = styled(Box)`
  padding-left: 350px;
  padding-top: 150px;
`;
const HeadingBox = styled(Box)`
  padding-left: 30px;
  padding-top: 40px;
`;
const CustomInput = styled(Input)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  position: absolute;
  width: 350px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #f1f1fa;
  border-radius: 16px;
  text-decoration: none;
  border-bottom: none;
`;
const CustomButton = styled(Button)`
  width: 350px;
  height: 48px;
  border-radius: 15px;
  background-color: #5352ed;
  color: #ffffff;
  margin-top: 5px;

  :hover {
    color: black;
    background-color: grey;
  }
`;

const LoginBox = styled(Box)`
  position: absolute;
  width: 345.01px;
  height: 26.87px;
  padding-left: 55px;
  font-family: Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  color: #91919f;
`;

const LoginLink = styled(Link)`
  color: #5352ed;
`;

const EmailBox = styled(Box)`
  padding-bottom: 70px;
`;
const PassBox = styled(Box)`
  padding-bottom: 70px;
`;
const Img = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 15px;
  margin-left: 200px;
`;

function Login() {
  const { loginUser } = useAuthHooks();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initial = useSelector(appReducers);
  const { loginLoading } = initial;
  const setEmailValue = (e) => {
    return setEmail(e.target.value);
  };

  const setPasswordValue = (e) => {
    return setPassword(e.target.value);
  };

  const data = {
    email,
    password,
  };

  return (
    <CustomBox>
      <LeftBox>
        <HeadingBox>
          <CustomHeading>
            Welcome,
            <br /> Get Started
          </CustomHeading>
        </HeadingBox>
        <Img src={image} alt="AddLink" />
      </LeftBox>
      {localStorage.getItem("auth") ? (
        <Navigate to="/dashboard" />
      ) : (
        <RightBox>
          <SignUpBox>
            <EmailBox>
              <CustomInput
                placeholder="Email"
                type="email"
                onChange={setEmailValue}
                disableUnderline
              ></CustomInput>
            </EmailBox>

            <PassBox>
              <CustomInput
                placeholder="Password"
                type="password"
                onChange={setPasswordValue}
                disableUnderline
              ></CustomInput>
            </PassBox>

            <CustomButton onClick={() => loginUser(data)}>
              {loginLoading === true ? "Loading..." : "Login"}
            </CustomButton>

            <LoginBox>
              Don't have an account? <LoginLink to="/">Sign Up</LoginLink>
            </LoginBox>
          </SignUpBox>
        </RightBox>
      )}
    </CustomBox>
  );
}

export default Login;
