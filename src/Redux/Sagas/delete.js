import {
  DELETE_FOLDER_FAILURE,
  DELETE_FOLDER_SUCCESS,
} from "../actions/constant";
import send_request from "../Request";
import { put } from "redux-saga/effects";

function* delete_folder(action) {
  const folderId = action.payload;

  try {
    let response = yield send_request("folder", "DELETE", { folderId });
    yield put({ type: DELETE_FOLDER_SUCCESS, payload: { response } });
    // console.log(response[0].id);
    console.log(response);
  } catch (error) {
    yield put({ type: DELETE_FOLDER_FAILURE }, error);
  }
}

export default delete_folder;
