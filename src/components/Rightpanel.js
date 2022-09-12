import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Bookmark from "./Bookmarks";
import Quicklink from "./QuickLink";
const CustomBox = styled(Box)`
  flex: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
  widht: 100%;
  overflow: hidden;
  margin-left: 30px;
`;
function Rightpanel() {
  return (
    <CustomBox>
      <Quicklink />
      <Bookmark />
    </CustomBox>
  );
}

export default Rightpanel;
