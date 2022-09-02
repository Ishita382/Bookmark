import React from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";

const CustomBox = styled(Box)`
  flex: 1;

  height: 100%;
  width: 100%;
`;
const CustomLinkBox = styled(Box)`
  background-color: #5352ed;
  flex: none;
  height: 200px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  padding-left: 35px;
`;
const LinkHeading = styled(Box)`
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #ffffff;
`;
const URLInput = styled(Input)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 450px;
  height: 40px;
  color: #fcfcfc;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 12px;
  top: 110px;
  background: #6c6bf9;
  border-radius: 16px;
`;

const URLHeading = styled(Box)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #fcfcfc;
  margin-top: 40px;
  font-family: Arial;
`;

const FolderHeading = styled(Box)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  color: #fcfcfc;
  margin-top: 120px;
  font-family: Arial;
`;

const FolderInput = styled(Input)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 200px;
  height: 40px;
  color: #fcfcfc;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-size: 12px;
  top: 190px;
  background: #6c6bf9;
  border-radius: 16px;
`;
const CustomButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  position: absolute;
  width: 100px;
  height: 40px;
  top: 190px;
  left: 700px;
  background: #ffffff;
  border-radius: 16px;
  font-size: 10px;
  font-weight: 400;
  :hover {
    color: white;
  }
`;
function Quicklink() {
  return (
    <CustomBox>
      <CustomLinkBox>
        <LinkHeading>Add Quick Link</LinkHeading>
        <URLHeading>URL</URLHeading>
        <URLInput
          type="text"
          placeholder="https://xd.adobe.com/view/c9822b2d-182f-4501-4126"
          disableUnderline
        ></URLInput>
        <FolderHeading>Folder</FolderHeading>
        <FolderInput disableUnderline></FolderInput>
        <CustomButton>Save</CustomButton>
      </CustomLinkBox>
    </CustomBox>
  );
}

export default Quicklink;
