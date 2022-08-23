import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";


function Dashboard() {
  const dispatch = useDispatch();
  const { getMe, getMyFolders } = useCustomHooks();
  useEffect(() => {
    getMe();
    getMyFolders();
  });
  return (
    <div>
      <h1>This is Dashboard.</h1>
      <h2>Quick Link</h2>
      <h3>URL</h3>
      <input type="text" placeholder="paste your link here" />
      <h3>Folder</h3>
      <input type="text"/>
      <button>Save</button>
    </div>
  );
}

export default Dashboard;
