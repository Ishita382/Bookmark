import { put } from "redux-saga/effects";
import { RENAME_FOLDER_REQUEST } from "../actions/constant";
import send_request from "../Request";

function* renameFolder(action){

    const { name, folderId } = action.payload;
    const data = { name, folderId };
    try{
    const response = yield send_request("rename-folder", "PUT", {data});
    }
    catch(error){
        
    }

};

export default renameFolder;