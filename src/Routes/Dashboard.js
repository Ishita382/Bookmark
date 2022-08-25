import React from "react";
import { useEffect } from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";
//import { useDispatch } from "react-redux";
import Leftpanel from "../components/Leftpanel";

import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Bookmark from "../components/Bookmark";



const CustomBox = styled(Box)`
display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
`
function Dashboard() {
  const { getMe, getMyFolders } = useCustomHooks();
  // const dispatch = useDispatch();
  useEffect(() => {
    getMe();
    getMyFolders();
  });

  return (
    <CustomBox>
      
      <Leftpanel />
      <Bookmark/>
    </CustomBox>
  );
}

export default Dashboard;
