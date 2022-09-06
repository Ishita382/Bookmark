import send_request from "../Request";
import { put } from "redux-saga/effects";
import {
  GET_CURRENT_FOLDER_FAILURE,
  GET_CURRENT_FOLDER_SUCCESS,
} from "../actions/constant";

function* currentFolder(action) {
  try {
    const response = yield send_request(
      `folders?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({ type: GET_CURRENT_FOLDER_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: GET_CURRENT_FOLDER_FAILURE }, error);
  }
}

export default currentFolder;
