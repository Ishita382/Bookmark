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
import Bookmark from "../components/Bookmarks";
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
  const initial = useSelector((state) => state.loginDetails);
  const {
    create,
    createFolderParent,
    renameModal,
    renameFolderId,
    bookmarks,
    folders,
    bookmarkFolder,
    rootBookmarks,
    bIds
  } = initial;
  const {
    getMe,
    getMyFolders,
    createFolder,
    closeModal,
    renameFolder,
    closeRenameModal,
    getBookmarks,
    
  } = useCustomHooks();

  useEffect(() => {
    getMe();
    getMyFolders();
  }, []);

  // useEffect(() => {
  //   getBookmarks();
  // }, []);
  const [folderName, setFolderName] = useState();

  const newFolderName = (e) => {
    return setFolderName(e.target.value);
  };
console.log("root bookmarks",rootBookmarks);
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
          <Modal open= {renameModal}>
            <ModalBox>
              New Name: <input type="text" onChange={newFolderName}/>
              <button onClick={() => {{renameFolder(renameFolderId, folderName);}{closeRenameModal();}}}>Submit</button>
            </ModalBox>
          </Modal>
          
          {/* {bookmarkFolder === ""
            ? Object.keys(rootBookmarks).length !== 0
              ? rootBookmarks.map((item) => (
                  <Bookmark key={item} item={bookmarks[item]} />
                ))
              : ""
            : folders[bookmarkFolder].bIds.length !== 0
            ? folders[bookmarkFolder].bIds.map((item) => (
                <Bookmark key={item} item={bookmarks[item]} />
              ))
            : ""} */}
          <Rightpanel />
        </CustomBox>
      ) : (
        <Navigate to="/login" />
      )}
    </Box>
  );
}

export default Dashboard;
