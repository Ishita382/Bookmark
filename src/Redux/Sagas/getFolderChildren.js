import send_request from "../Request";
import { put } from "redux-saga/effects";

import { folderConst } from "../actions/folderConstants";
function* getFolderChildren(action) {
  try {
    const response = yield send_request(
      `folders?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({ type: folderConst.GET_FOLDER_CHILDREN_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: folderConst.GET_FOLDER_CHILDREN_FAILURE }, error);
  }
}

export default getFolderChildren;
