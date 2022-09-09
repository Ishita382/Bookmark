import React, { useCallback } from "react";
import { useEffect } from "react";

import Modal from "@mui/material/Modal";

import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

import { useSelector } from "react-redux";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

import Rightpanel from "../components/Rightpanel";
import Leftpanel from "../components/Leftpanel";
import { useFolderHooks } from "../Redux/hooks/folderHooks";
import { appReducers } from "../Redux/selector";
import { useAuthHooks } from "../Redux/hooks/authHooks";
const CustomBox = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
  max-width: 1320px;
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
  margin-top: -380px;
  margin-left: 240px;
  color: red;
`;
const Name = styled(Box)`
  color: gray;
  font-size: 16px;
  
  padding: 30px 0px 0px 20px;
  font-family: Arial;
`;
const CustomInput = styled(Input)`
margin-top: 15px;
  margin-left: 20px;
  border-radius: 8px;
  border: solid 1px #6C6BF9;
  width: 240px;
  
`;
const CustomButton = styled(Button)`
  margin-left: 115px;
  margin-top: 15px;
  color: white;
  background: #5352ED;
border-radius: 11px;
`;

const Heading = styled(Box)`
color: black;
font-family: Arial;
font-weight: bold;
padding-top: 20px;
margin-left: 20px;
font-size: 15px;
width: 30px;
`

function Dashboard() {
  const initial = useSelector(appReducers);
  const { openModal, createFolderParent, setFolderIdToRename, renameFolderId } =
    initial;

  const { getMe, useGetMe } = useAuthHooks();
  const {
    getMyFolders,
    createFolder,
    closeModal,
    renameFolder,
    closeRenameModal,
  } = useFolderHooks();

  useGetMe(
  useEffect(() => {
    getMe();
    getMyFolders();
  }, [])
  );
  const [folderName, setFolderName] = useState();

  const newFolderName = (e) => {
    return setFolderName(e.target.value);
  };

  const renameFolderModal = useCallback(() => {
    renameFolder(renameFolderId, folderName);
    closeRenameModal();
  });

  const newFolderModal = useCallback(() => {
    createFolder(folderName, createFolderParent);
    closeModal();
  });

  return (
    <Box>
      {localStorage.getItem("auth") ? (
        <CustomBox>
          <Leftpanel />
          <Modal open={openModal}>
            <ModalBox>
              <Heading>SUB FOLDER</Heading><Name> Folder Name</Name>{" "}
              <CustomInput type="text" onChange={newFolderName} placeholder="Enter Folder Name" disableUnderline />
              <CustomButton onClick={newFolderModal}>Submit</CustomButton>
              <CloseButton onClick={() => closeModal()}>
                <Close />
              </CloseButton>
            </ModalBox>
          </Modal>
          <Modal open={setFolderIdToRename}>
            <ModalBox>
              <Heading>RENAME FOLDER</Heading>
              <Name>Folder Name</Name>{" "}
              <CustomInput type="text" onChange={newFolderName} placeholder="Enter New Name" disableUnderline/>
              <CustomButton onClick={renameFolderModal}>Submit</CustomButton>
              <CloseButton onClick={() => closeRenameModal()}>
                <Close />
              </CloseButton>
            </ModalBox>
          </Modal>

          <Rightpanel />
        </CustomBox>
      ) : (
        <Navigate to="/login" />
      )}
    </Box>
  );
}

export default Dashboard;
