import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncFolderTypes } from "../actions/asyncTypes";
export function* getUserFolders() {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield sendRequest("folders", "GET", {});
      yield put({
        type: asyncFolderTypes.GET_MY_FOLDERS_SUCCESS,
        payload: { response },
      });
    } catch (error) {
      yield put({ type: asyncFolderTypes.GET_MY_FOLDERS_FAILURE }, error);
    }
  }
}
