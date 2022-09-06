import React from "react";
import styled from "@emotion/styled";
import Quicklink from "./QuickLink";
import { Box } from "@mui/material";
import Bookmark from "./Bookmarks";
const CustomBox = styled(Box)`
  flex: 3;
  display: flex;
  flex-direction: column;
  height: 100%;
  widht: 100%;
  overflow: hidden;
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
