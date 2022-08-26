import React from "react";
import { useSelector } from "react-redux";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input } from "@mui/material";
import styled from "@emotion/styled";

const CustomBox = styled(Box)`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const CustomButton = styled(Button)`
  background-color: white;
  :hover {
    background-color: #e4e3ff;
  }
  border-radius: 8px;
`;
const FolderBox = styled(Box)`
  margin-top: 60px;
`;
const CustomHeading = styled(Box)`
  color: black;
  font-family: Arial;
  font-style: normal;
  font-weight: 700;
  font-size: 22.5146px;
  line-height: 27px;
  position: absolute;
  width: 134px;
  height: 27px;
  margin-top: 30px;
`;

const CustomInput = styled(Input)`
  margin-top: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 93px 8px 16px;
  gap: 8px;
  width: 180px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
function Leftpanel() {
  const initial = useSelector((state) => state.loginDetails);
  const myFolders = initial.folders;
  const { logout } = useCustomHooks();
  const navigate = useNavigate();
  console.log("dashboard folders", myFolders);
  return (
    <CustomBox>
      <CustomHeading>BOOKMARK</CustomHeading>
      <CustomInput placeholder="Search" disableUnderline></CustomInput>
      <FolderBox>
        {Object.keys(myFolders).length !== 0 &&
          myFolders.map((item) => (
            <Box>
              <CustomButton key={item.id}>{item.name}</CustomButton>
              <br />
            </Box>
          ))}
      </FolderBox>
      <button onClick={() => logout(navigate)}>Logout</button>
    </CustomBox>
  );
}

export default Leftpanel;
