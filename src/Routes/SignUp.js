import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import { Input } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
const CustomHeading =  styled(Box)`
color:white;
font-size: 35px;
font-family: Inter;
font-weight: 400;
padding-top: 20px;
padding-left: 20px;
line-height: 51px;
font-family: Arial;
letter-spacing: 0.03em;
`
const LeftBox = styled(Box)`
background-color: #5352ed;
display: flex;
flex-direction: column;
color: #ffffff;
    
`
const RightBox = styled(Box)`
    display: flex;
    
`
const CustomBox = styled(Box)`
display: grid;
grid-template-columns: 30% 70%;
height: 100vh;
width: 100vw;
    

`
const SignUpBox = styled(Box)`
 padding-left: 200px;
 padding-top: 150px;
`
const HeadingBox = styled(Box)`
padding-left: 30px;
padding-top: 20px;


`
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
background: #FFFFFF;
border: 1px solid #F1F1FA;
border-radius: 16px;

`
const CustomButton = styled(Button)`
  width: 350px;
  height: 50px;
  border-radius: 30px;
  background-color: #5352ED;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 200px;
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
color: #91919F;
`
const CustomLink = styled(Link)`
  color: #5352ed;
`;

const CustomCheckBox = styled(Box)`
position: absolute;
width: 411.47px;
height: 50.9px;
font-family: Arial;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 25px;
display: flex;
align-items: center;
color: #000000;
`
function SignUp(){

    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    //const dispatch = useDispatch();
    const { sendRegistrationDetails } = useCustomHooks();
    const registerName = (e) => {
        return setRegName(e.target.value);
    }

    const registerEmail = (e) => {
        return setRegEmail(e.target.value);
    }

    const registerPassword = (e) => {
        return setRegPassword(e.target.value);
    }

    const data = {regName, regEmail, regPassword};
    return(
        <CustomBox>
            <LeftBox>
                <HeadingBox>
            <CustomHeading>Welcome,<br/> Get Started</CustomHeading></HeadingBox></LeftBox>
            <RightBox>
            <SignUpBox>
            <Box><CustomInput type="text" onChange={registerName} placeholder="Name" disableUnderline></CustomInput></Box><br/>
            <Box><CustomInput type="email" onChange={registerEmail} placeholder="Email" disableUnderline></CustomInput></Box><br/>
            <Box><CustomInput type="password" onChange={registerPassword} placeholder="Password" disableUnderline></CustomInput></Box>
            <Box></Box>
            {/* <CustomCheckBox>By signing up, you agree to the Terms of Service and Privacy Policy</CustomCheckBox> */}
           <Box>
            <CustomButton onClick={()=>sendRegistrationDetails(data)}><CustomLink to ="/dashboard" disableUnderline>Sign Up</CustomLink></CustomButton>
            </Box>
                <LoginBox>
            Already have an account? <CustomLink to="/login" disableUnderline>Login</CustomLink>
            </LoginBox>
            </SignUpBox>
            </RightBox>
        </CustomBox>
    )
}

export default SignUp;
