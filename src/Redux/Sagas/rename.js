import { put } from "redux-saga/effects";

import send_request from "../Request";

import { asyncFolderTypes } from "../actions/asyncTypes";
function* renameFolder(action) {
  const { folderId, name } = action.payload;
  try {
    const response = yield send_request("rename-folder", "PUT", {
      folderId,
      name,
    });
    yield put({ type: asyncFolderTypes.RENAME_FOLDER_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: asyncFolderTypes.RENAME_FOLDER_FAILURE }, error);
  }
}

export default renameFolder;
