import React from "react";
import styled from "@emotion/styled";
import Quicklink from "./QuickLink";
import { Box } from "@mui/material";
const CustomBox = styled(Box)`
  flex: 3;
  height: 100%;
  widht: 100%;
  background-color: pink;
`;
function Bookmark() {
  return (
    <CustomBox>
      <Quicklink />
    </CustomBox>
  );
}

export default Bookmark;
