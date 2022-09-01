import React from "react";
import { useEffect } from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import Modal from "@mui/material/Modal";
import Leftpanel from "../components/Leftpanel";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Rightpanel from "../components/Rightpanel";
import { useSelector } from "react-redux";
import { useState } from "react";

const CustomBox = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const ModalBox = styled(Box)`
  align-items: center;
  margin-left: 600px;
  margin-top: 300px;
`;

function Dashboard() {
  const initials = useSelector((state) => state.loginDetails);
  const { create, createFolderParent } = initials;
  const { getMe, getMyFolders, createFolder, closeModal } = useCustomHooks();

  useEffect(() => {
    getMe();
    getMyFolders();
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
          <Modal open={create}>
            <ModalBox>
              Name: <input type="text" onChange={newFolderName} />
              <button
                onClick={() => {
                  {
                    createFolder(folderName, createFolderParent);
                  }
                  {
                    closeModal();
                  }
                }}
              >
                Submit
              </button>
              <button onClick={() => closeModal()}>close</button>
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
