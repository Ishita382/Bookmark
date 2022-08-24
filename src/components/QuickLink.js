import React from "react";
import { useCustomHooks } from "../Redux/hooks/customHooks";
import { useState } from "react";
function Quicklink() {
  const { createFolder } = useCustomHooks();

  const [folder, setFolder] = useState();

  const folderName = (e) => {
    setFolder(e.target.value);
  };
  return (
    <div>
      <h2>Quick Link</h2>
      <h3>URL</h3>
      <input type="text" placeholder="paste your link here" />
      <h3>Folder</h3>
      <input type="text" onChange={folderName} />
      <button onClick={() => createFolder(folder)}>Save</button>
    </div>
  );
}

export default Quicklink;
