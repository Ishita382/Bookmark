import React from "react";
import { useEffect } from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import { useDispatch } from "react-redux";
import Leftpanel from "../components/Leftpanel";
import Quicklink from "../components/QuickLink";
import { initialState } from "../Redux/reducers/reducers";
function Dashboard() {
  const { getMe, getMyFolders } = useCustomHooks();
  const dispatch = useDispatch();
  useEffect(() => {
    getMe();
    getMyFolders();
  }, [dispatch]);

  return (
    <div>
      
      <Quicklink />
      <Leftpanel />
    </div>
  );
}

export default Dashboard;
