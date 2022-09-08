import { put } from "redux-saga/effects";

import send_request from "../Request";

import { asyncFolderTypes } from "../actions/asyncTypes";
export function* getUserFolders() {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield send_request("folders", "GET", {});
      yield put({ type: asyncFolderTypes.GET_MY_FOLDERS_SUCCESS, payload: { response } });
    } catch (error) {
      yield put({ type: asyncFolderTypes.GET_MY_FOLDERS_FAILURE }, error);
    }
  }
}
