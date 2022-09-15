import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncFolderTypes } from "../actions/asyncTypes";
export function* createMyFolder(action) {
  if (localStorage.getItem("auth")) {
    try {
      let item = {
        name: action.payload.name,
      };
      if (!action.payload.id.isEmpty) {
        item.parentId = action.payload.id;
      }
      let response = yield sendRequest("folder", "POST", item);
      yield put({
        type: asyncFolderTypes.CREATE_FOLDER_SUCCESS,
        payload: { response },
      });
    } catch (error) {
      yield put({ type: asyncFolderTypes.CREATE_FOLDER_FAILURE }, error);
    }
  }
}
