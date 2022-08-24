import React from "react";
import { useSelector } from "react-redux";
function Leftpanel(){
    const initial = useSelector((state) => state.loginDetails);
    const myFolders = initial.folders;
    return(
        <div>
        {
          myFolders.map((item) => (
            <h4 key={item.id}>{item.name}</h4>
          ))
        }
      </div>
    )
}

export default Leftpanel;