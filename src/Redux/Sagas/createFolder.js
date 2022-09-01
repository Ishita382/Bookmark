import send_request from "../Request";
import { put } from "redux-saga/effects";
import {
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
} from "../actions/constant";
export function* createMyFolder(action) {
  
  // const {folder : name} = data;
  if (localStorage.getItem("auth")) {
    let item = {
      name : action.payload.name,
    };
    if(action.payload.id!==""){
      item.parentId = action.payload.id;
    }
    try {
      let response = yield send_request("folder", "POST", item );
      yield put({ type: CREATE_FOLDER_SUCCESS, payload :  {response} });
      console.log("create my folder", response);
    } catch (error) {
      yield put({ type: CREATE_FOLDER_FAILURE }, error);
    }
  }
}
