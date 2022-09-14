import React from "react";
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
  max-width: 1450px;
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
const CustomInput = styled(Input)`
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

function Dashboard() {
  const initial = useSelector(appReducers);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [folderName, setFolderName] = useState();

  const newFolderName = (e) => {
    return setFolderName(e.target.value);
  };

  return (
    <Box>
      {localStorage.getItem("auth") ? (
        <CustomBox>
          <Leftpanel />
          <Modal open={openModal}>
            <ModalBox>
              <Heading>SUB FOLDER</Heading>
              <Name> Folder Name</Name>{" "}
              <CustomInput
                type="text"
                onChange={newFolderName}
                placeholder="Enter Folder Name"
                disableUnderline
              />
              <CustomButton
                onClick={() => {
                  createFolder(folderName, createFolderParent);
                  closeModal();
                }}
              >
                Submit
              </CustomButton>
              <CloseButton onClick={() => closeModal()}>
                <Close />
              </CloseButton>
            </ModalBox>
          </Modal>
          <Modal open={setFolderIdToRename}>
            <ModalBox>
              <Heading>RENAME FOLDER</Heading>
              <Name>Folder Name</Name>
              <CustomInput
                type="text"
                onChange={newFolderName}
                placeholder="Enter New Name"
                disableUnderline
              />
              <CustomButton
                onClick={() => {
                  renameFolder(renameFolderId, folderName);
                  closeRenameModal();
                }}
              >
                Submit
              </CustomButton>
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
