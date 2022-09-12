import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncFolderTypes } from "../actions/asyncTypes";
function* getFolderChildren(action) {
  try {
    const response = yield sendRequest(
      `folders?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({
      type: asyncFolderTypes.GET_FOLDER_CHILDREN_SUCCESS,
      payload: { response },
    });
  } catch (error) {
    yield put({ type: asyncFolderTypes.GET_FOLDER_CHILDREN_FAILURE }, error);
  }
}

export default getFolderChildren;
