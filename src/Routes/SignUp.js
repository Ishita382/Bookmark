import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendRegistrationDetails } from "../Redux/Actions/actions";
import { Button, Input } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
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
    flex: 1;
    
    
`
const RightBox = styled(Box)`
    flex: 2;
    justify-content: center;
`
const CustomBox = styled(Box)`
    display: flex;

`
const SignUpBox = styled(Box)`
 padding-left: 200px;
 padding-top: 150px;
`
const HeadingBox = styled(Box)`
background-color: #5352ED;
height: 100%;
width:100%; 

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
  border-radius: 15px;
  background-color: #5352ED;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 200px;
  :hover {
    color: black;
    background-color: grey;
  }
`;
function SignUp(){

    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const dispatch = useDispatch();

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
            <Box><CustomInput type="text" onChange={registerName} placeholder="Name" disableUnderline></CustomInput></Box>
            <Box><CustomInput type="email" onChange={registerEmail} placeholder="Email" disableUnderline></CustomInput></Box>
            <Box><CustomInput type="password" onChange={registerPassword} placeholder="Password" disableUnderline></CustomInput></Box>
           <Box>
            <CustomButton onClick={()=>dispatch(sendRegistrationDetails(data))}><Link to ="/dashboard">Sign Up</Link></CustomButton>
            </Box>
            Already have an account? <Link to="/login">Login</Link>
            </SignUpBox>
            </RightBox>
        </CustomBox>
    )
}

export default SignUp;
