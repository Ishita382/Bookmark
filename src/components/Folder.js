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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FolderButton = styled(Button)`
  margin-top: 3px;
  font-weight: bold;
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
  }
  width: 200px;
  border-radius: 5px;
`;
const FolderName = styled(Box)`
  color: #77757f;
  font-weight: 500;
`;
const SubFolderBox = styled(Box)`
  margin-left: 20px;
`;

const style = {
  borderRadius: "5px",
  backgroundColor: "#E4E3FF",
};

function Folder(props) {
  const { item } = props;
  const { openModal, openRenameModal, getFolderChildren } = useFolderHooks();
  const { getBookmarks } = useBookmarkHooks();
  const { folders, bookmarkFolder, isOpen } = useSelector(appReducers);
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      
          <FolderBox style={bookmarkFolder === item.id ? style : {}}>
            <ArrowButton onClick={() => getFolderChildren(item.id)}>
            {isOpen[item.id]==="true" ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </ArrowButton>
            <FolderButton onClick={() => getBookmarks(item.id)}>
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
                  openModal(item.id);
                }}
              >
                Add Subfolder
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleClose();
                  openRenameModal(item.id);
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
        
      
    </Box>
  );
}

export default Folder;
