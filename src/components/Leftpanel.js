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
import { useSearchParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

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
  background-color: white;
  color: #5352ed;
  font-weight: 400;
  :hover {
    color: #5352ed;
    background-color: white;
  }
  margin-top: 15px;
  margin-left: 12px;
  border-radius: 9px;
  height: 40px;
  border: solid 2px #5352ed;
  padding: 7px 18px 7px 13px;
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

const ModalBox = styled(Box)`
  align-items: center;
  margin-left: 600px;
  margin-top: 260px;
  height: 250px;
  width: 300px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`;

const CloseButton = styled(Button)`
  margin-top: -384px;
  margin-left: 240px;
  color: black;
`;
const Name = styled(Box)`
  color: gray;
  font-size: 16px;
  margin-left: 6px;
  margin-top: 7px;
  padding: 30px 0px 0px 20px;
  font-family: Arial;
`;
const CustomModalInput = styled(Input)`
  margin-top: 7px;
  margin-left: 25px;
  border-radius: 10px;
  border: solid 1px #6c6bf9;
  width: 250px;
  height: 37px;
  color: #5352ed;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-indent: 5px;
  font-size: 13px;
  padding-left: 5px;
  flex: none;
  order: 0;
  flex-grow: 1;
`;
const CustomButton = styled(Button)`
  margin-left: 95px;
  margin-top: 28px;
  color: white;
  background: #5352ed;
  border-radius: 11px;
  padding: 8px 25px 8px 25px;
  font-size: 12px;
  font-weight: 600;
`;

const Heading = styled(Box)`
  color: black;
  font-family: Arial;
  font-weight: bold;
  padding-top: 30px;
  margin-top: 20px;
  margin-left: 26px;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ImageButton = styled(Button)`
  :active {
    background-color: white;
  }
  :hover {
    background-color: white;
  }
`;
function Leftpanel() {
  const initial = useSelector(appReducers);
  const { folderIds, folders, folderLoading } = initial;
  const { logout } = useAuthHooks();
  const { createFolder } = useFolderHooks();
  const navigate = useNavigate();

  const [folder, setFolder] = useState();
  const folderNewName = (e) => {
    setFolder(e.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const refreshPage = () => {
    if (searchParams.has("folder")) {
      searchParams.delete("folder");
      setSearchParams(searchParams);
    }
    window.location.reload();
  };

  return (
    <CustomBox>
      <ImageButton onClick={refreshPage}>
        <Img src={image} alt="AddLink" />
      </ImageButton>
      <CustomHeading>BOOKMARK</CustomHeading>
      <CustomInput placeholder="Search" disableUnderline></CustomInput>
      {folderLoading === true ? (
        <LoadingBox>...Loading</LoadingBox>
      ) : (
        <FolderBox>
          {/* folders mapping */}
          {Object.keys(folderIds).length !== 0 &&
            folderIds.map((item) => <Folder key={item} item={folders[item]} />)}
        </FolderBox>
      )}

      <SaveButton onClick={() => handleOpen()}>+ Add Folder</SaveButton>
      <Modal open={open}>
        <ModalBox>
          <Heading>Add Folder</Heading>
          <Name>Folder Name</Name>
          <CustomModalInput
            type="text"
            onChange={folderNewName}
            placeholder="Enter New Name"
            disableUnderline
          />
          <CustomButton onClick={() => createFolder(folder)}>
            Submit
          </CustomButton>
          <CloseButton onClick={() => handleClose()}>
            <Close />
          </CloseButton>
        </ModalBox>
      </Modal>
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
