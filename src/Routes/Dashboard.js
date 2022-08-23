import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "../Redux/Actions/actions";
function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  });
  return (
    <div>
      <h1>This is Dashboard.</h1>
      <h2>Quick Link</h2>
      <h3>URL</h3>
      <input type="text" placeholder="paste your link here" />
      <button>Save</button>
    </div>
  );
}

export default Dashboard;
