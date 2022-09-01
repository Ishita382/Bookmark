import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Box from "@mui/material/Box";

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

const AddButton = styled(Button)`
`
function Folder(props) {
  const { item } = props;
  const {openModal} = useCustomHooks();
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
        <AddButton onClick={() => openModal(item.id)}>+</AddButton>
      </FolderBox>
    </Box>
  );
}

export default Folder;
