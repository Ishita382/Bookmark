import send_request from "../Request";
import { put } from "redux-saga/effects";
import {
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
} from "../actions/constant";
export function* createMyFolder(action) {
  const name = action.payload;
  // const {folder : name} = data;
  if (localStorage.getItem("auth")) {
    try {
      let response = yield send_request("folder", "POST", {name});
      yield put({ type: CREATE_FOLDER_SUCCESS, response });
      console.log("create my folder", response);
    } catch (error) {
      yield put({ type: CREATE_FOLDER_FAILURE }, error);
    }
  }
}
