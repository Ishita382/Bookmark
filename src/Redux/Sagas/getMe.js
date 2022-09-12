import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncAuthTypes } from "../actions/asyncTypes";

export function* getUser() {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield sendRequest("me", "GET", {});
      yield put({ type: asyncAuthTypes.GET_ME_SUCCESS, payload: { response } });
    } catch (error) {
      yield put({ type: asyncAuthTypes.GET_ME_FAILURE }, error);
    }
  }
}
