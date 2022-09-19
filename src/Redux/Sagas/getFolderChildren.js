import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncFolderTypes } from "../actions/asyncTypes";
import { folderId } from "../../utils/helpers";
function* getFolderChildren(action) {
  const getChildren = folderId(action.payload);
  try {
    const response = yield sendRequest(getChildren, "GET", {});
    yield put({
      type: asyncFolderTypes.GET_FOLDER_CHILDREN_SUCCESS,
      payload: { response },
    });
  } catch (error) {
    yield put({ type: asyncFolderTypes.GET_FOLDER_CHILDREN_FAILURE }, error);
  }
}

export default getFolderChildren;
