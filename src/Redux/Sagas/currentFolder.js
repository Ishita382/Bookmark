
import { put } from "redux-saga/effects";
import send_request from "../Request";

import { asyncFolderTypes } from "../actions/asyncTypes";
function* currentFolder(action) {
  try {
    const response = yield send_request(
      `folders?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({ type: asyncFolderTypes.GET_CURRENT_FOLDER_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: asyncFolderTypes.GET_CURRENT_FOLDER_FAILURE }, error);
  }
}

export default currentFolder;
