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
import { loginDetails } from "../Redux/selector";
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
  margin-top: 300px;
  height: 120px;
  width: 320px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`;

const CloseButton = styled(Button)`
  margin-top: -140px;
  margin-left: 260px;
  color: red;
`;
const Name = styled(Box)`
  color: gray;
  font-size: 16px;
  font-weight: 600;
  padding: 30px 0px 0px 20px;
  font-family: Arial;
`;
const CustomInput = styled(Input)`
  margin-left: 20px;
`;
const CustomButton = styled(Button)`
  margin-left: 15px;
`;

function Dashboard() {
  const initial = useSelector(loginDetails);
  const { openModal, createFolderParent, setFolderIdToRename, renameFolderId } =
    initial;

  const { getMe } = useAuthHooks();
  const {
    getMyFolders,
    createFolder,
    closeModal,
    renameFolder,
    closeRenameModal,
  } = useFolderHooks();

  useEffect(() => {
    getMe();
    getMyFolders();
  }, []);

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
              <Name>Enter Folder Name</Name>{" "}
              <CustomInput type="text" onChange={newFolderName} />
              <CustomButton onClick={newFolderModal}>Submit</CustomButton>
              <CloseButton onClick={() => closeModal()}>
                <Close />
              </CloseButton>
            </ModalBox>
          </Modal>
          <Modal open={setFolderIdToRename}>
            <ModalBox>
              <Name>Enter New Name</Name>{" "}
              <CustomInput type="text" onChange={newFolderName} />
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
