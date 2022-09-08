import React from "react";
import { Link,  Navigate } from "react-router-dom";
import { useState } from "react";

import { Input } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

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
`;
const CustomBox = styled(Box)`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
`;
const SignUpBox = styled(Box)`
  padding-left: 200px;
  padding-top: 150px;
`;
const HeadingBox = styled(Box)`
  padding-left: 30px;
  padding-top: 20px;
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
  margin-top: 70px;

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

function SignUp() {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const initial = useSelector((state)=>state.loginDetails);
  const { registrationLoading} = initial;
  const { sendRegistrationDetails } = useAuthHooks();
  const registerName = (e) => {
    return setRegName(e.target.value);
  };

  const registerEmail = (e) => {
    return setRegEmail(e.target.value);
  };

  const registerPassword = (e) => {
    return setRegPassword(e.target.value);
  };

  const data = { regName, regEmail, regPassword };
  return (
    <CustomBox>
      <LeftBox>
        <HeadingBox>
          <CustomHeading>
            Welcome,
            <br /> Get Started
          </CustomHeading>
        </HeadingBox>
      </LeftBox>
      {localStorage.getItem("auth")?(<Navigate to="/dashboard" />):(
      <RightBox>
        <SignUpBox>
          <Box>
            <CustomInput
              type="text"
              onChange={registerName}
              placeholder="Name"
              disableUnderline
            ></CustomInput>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box>
            <CustomInput
              type="email"
              onChange={registerEmail}
              placeholder="Email"
              disableUnderline
            ></CustomInput>
          </Box>
          <br />
          <br />
          <br />
          <br />
          <Box>
            <CustomInput
              type="password"
              onChange={registerPassword}
              placeholder="Password"
              disableUnderline
            ></CustomInput>
          </Box>
          <Box></Box>

          <Box>
            <CustomButton onClick={() => sendRegistrationDetails(data)}>
              {registrationLoading==="inProgress"?"...Loading":"Sign Up"}
            </CustomButton>
          </Box>
          <LoginBox>
            Already have an account? <LoginLink to="/login">Login</LoginLink>
          </LoginBox>
        </SignUpBox>
      </RightBox>
      )}
    </CustomBox>
  );
}

export default SignUp;
