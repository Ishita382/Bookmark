import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useCustomHooks } from "../Redux/hooks/customHooks";

const FolderButton = styled(Button)`
  margin-top: 3px;
  font-weight: bold;
  color: #5352ed;
`;

const ArrowButton = styled(Button)`
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

const AddButton = styled(Button)``;
function Folder(props) {
  const { item } = props;
  const { openModal, openRenameModal } = useCustomHooks();
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
      <FolderBox>
        <ArrowButton>
          <ArrowRightIcon />
        </ArrowButton>
        <FolderButton>
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
              {
                handleClose();
              }
              {
                openModal(item.id);
              }
            }}
          >
            Add Subfolder
          </MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem
            onClick={() => {
              {
                handleClose();
              }
              {
                openRenameModal();
              }
            }}
          >
            Rename
          </MenuItem>
        </Menu>
      </FolderBox>
    </Box>
  );
}

export default Folder;
