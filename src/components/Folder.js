import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import FolderIcon from "@mui/icons-material/Folder";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux/es/exports";
import { appReducers } from "../Redux/selector";
import { useFolderHooks } from "../Redux/hooks/folderHooks";
import { useBookmarkHooks } from "../Redux/hooks/bookmarkHooks";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useSearchParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import { Input } from "@mui/material";
import { useState } from "react";
const FolderButton = styled(Button)`
  margin-top: 3px;

  color: #5352ed;
`;

const ArrowButton = styled(Button)`
  margin-top: 5px;
  margin-right: -25px;
  margin-left: -20px;
`;
const FolderBox = styled(Box)`
  :hover {
    background-color: #e4e3ff;
    display: block;
  }
  width: 200px;
  border-radius: 5px;
`;
const FolderName = styled(Box)`
  color: #77757f;
  margin-left: 10px;
  font-size: 13px;
`;
const SubFolderBox = styled(Box)`
  margin-left: 20px;
`;

const style = {
  borderRadius: "5px",
  backgroundColor: "#E4E3FF",
};

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

function Folder(props) {
  const { item } = props;
  const {
    setSubFolderId,
    setRenameFolderId,
    getFolderChildren,
    setParent,
    createFolder,
    renameFolder,
  } = useFolderHooks();
  const { getBookmarks } = useBookmarkHooks();
  const { folders, createFolderParent, renameFolderId } =
    useSelector(appReducers);
  const [anchorEl, setAnchorEl] = React.useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("folder");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const folderClick = () => {
    !item.hasOwnProperty("cIds")
      ? getFolderChildren(item.id)
      : setParent(item.id);
  };

  const [folderName, setFolderName] = useState();
  const [openfolder, setOpenfolder] = useState();
  const handleCloseFolder = () => setOpenfolder(false);
  const handleOpen = () => setOpenfolder(true);
  const newFolderName = (e) => {
    return setFolderName(e.target.value);
  };
  return (
    <Box>
      <FolderBox className="hoverfolder" style={param === item.id ? style : {}}>
        <ArrowButton onClick={() => folderClick()}>
          <ArrowRightIcon />
        </ArrowButton>
        <FolderButton
          onClick={() => {
            getBookmarks(item.id);

            setSearchParams({ folder: item.id });
          }}
        >
          <FolderIcon />
          <FolderName>{item.name}</FolderName>
        </FolderButton>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          className="hide"
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setSubFolderId(item.id);
              handleOpen();
            }}
          >
            Add Subfolder
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              setRenameFolderId(item.id);
              handleOpen();
            }}
          >
            Rename
          </MenuItem>
        </Menu>
      </FolderBox>
      <SubFolderBox>
        {item.hasOwnProperty("childIds") &&
          item.childIds.length > 0 &&
          item.childIds.map((item) => (
            <Folder key={item} item={folders[item]} />
          ))}
      </SubFolderBox>
      <Modal open={openfolder}>
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
              handleCloseFolder();
            }}
          >
            Submit
          </CustomButton>
          <CloseButton onClick={() => handleCloseFolder()}>
            <Close />
          </CloseButton>
        </ModalBox>
      </Modal>
      <Modal open={openfolder}>
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
              handleCloseFolder();
            }}
          >
            Submit
          </CustomButton>
          <CloseButton onClick={() => handleCloseFolder()}>
            <Close />
          </CloseButton>
        </ModalBox>
      </Modal>
    </Box>
  );
}

export default Folder;
