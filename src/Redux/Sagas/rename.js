import { put } from "redux-saga/effects";
import {
  RENAME_FOLDER_FAILURE,
  RENAME_FOLDER_SUCCESS,
} from "../actions/constant";
import send_request from "../Request";

function* renameFolder(action) {
  const folderId = action.payload.folderId;
  const name = action.payload.name;
  const data = { folderId, name };
  try {
    const response = yield send_request("rename-folder", "PUT", { data });
    yield put({ type: RENAME_FOLDER_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: RENAME_FOLDER_FAILURE }, error);
  }
}

export default renameFolder;
