import { put } from "redux-saga/effects";

import send_request from "../Request";
import { authConst } from "../actions/authConstants";


export function* getUser() {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield send_request("me", "GET", {});
      yield put({ type: authConst.GET_ME_SUCCESS, payload: { response } });
    } catch (error) {
      yield put({ type: authConst.GET_ME_FAILURE }, error);
    }
  }
}
