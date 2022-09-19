import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Rightpanel from "../components/Rightpanel";
import Leftpanel from "../components/Leftpanel";
import { useFolderHooks } from "../Redux/hooks/folderHooks";
import { useAuthHooks } from "../Redux/hooks/authHooks";

const CustomBox = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
  max-width: 1450px;
`;

function Dashboard() {
  const { getMe } = useAuthHooks();
  const { getMyFolders } = useFolderHooks();

  useEffect(() => {
    getMe();
    getMyFolders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {localStorage.getItem("auth") ? (
        <CustomBox>
          <Leftpanel />
          <Rightpanel />
        </CustomBox>
      ) : (
        <Navigate to="/login" />
      )}
    </Box>
  );
}

export default Dashboard;
