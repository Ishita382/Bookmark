import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Folder from "./Folder";
import { useFolderHooks } from "../Redux/hooks/folderHooks";
import { appReducers } from "../Redux/selector";
import { useAuthHooks } from "../Redux/hooks/authHooks";
import image from "../assets/logo.png";

const CustomBox = styled(Box)`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  padding-right: 40px;
`;

const FolderBox = styled(Box)`
  margin-top: 18px;
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
  width: 170px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  order: 1;
  flex-grow: 0;
`;

const NewFolderInput = styled(Input)`
  margin-top: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 93px 8px 16px;
  gap: 8px;
  width: 157px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  order: 1;
  flex-grow: 0;
`;

const LogoutButton = styled(Button)`
  margin-top: -15px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: #88868f;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: Arial;
  :hover {
    background-color: #e4e3ff;
  }
`;
const LogoutBox = styled(Box)`
  padding-top: 180px;
`;

const SaveButton = styled(Button)`
  background-color: #5352ed;
  color: white;
  font-weight: 400;
  :hover {
    color: #5352ed;
    background-color: white;
  }
  margin-top: 7px;
  border-radius: 9px;
  height: 30px;
`;

const LoadingBox = styled(Box)`
  color: gray;
  font-family: Arial;
  font-size: 16px;
  margin-top: 21px;
  margin-left: 30px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin-bottom: -23px;
  margin-top: 10px;
`;

function Leftpanel() {
  const initial = useSelector(appReducers);
  const { folderIds, folders, folderLoading } = initial;
  const { logout } = useAuthHooks();
  const { createFolder } = useFolderHooks();
  const navigate = useNavigate();
  const [folder, setFolder] = useState();
  const folderName = (e) => {
    setFolder(e.target.value);
  };

  return (
    <CustomBox>
      <Img src={image} alt="AddLink" />
      <CustomHeading>BOOKMARK</CustomHeading>
      <CustomInput placeholder="Search" disableUnderline></CustomInput>
      {folderLoading === "inProgress" ? (
        <LoadingBox>...Loading</LoadingBox>
      ) : (
        <FolderBox>
          {/* folders mapping */}
          {Object.keys(folderIds).length !== 0 &&
            folderIds.map((item) => <Folder key={item} item={folders[item]} />)}
        </FolderBox>
      )}
      <NewFolderInput
        type="text"
        onChange={folderName}
        disableUnderline
        placeholder="+ New"
      />
      <SaveButton onClick={() => createFolder(folder)}>Save</SaveButton>

      <LogoutBox>
        <LogoutButton onClick={() => logout(navigate)}>
          <LogoutIcon />
          Logout
        </LogoutButton>
      </LogoutBox>
    </CustomBox>
  );
}

export default Leftpanel;
