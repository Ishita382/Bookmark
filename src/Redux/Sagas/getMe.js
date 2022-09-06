import { put } from "redux-saga/effects";
import { GET_ME_FAILURE, GET_ME_SUCCESS } from "../actions/constant";
import send_request from "../Request";

//const getMeApi = "https://bookmarks-app-server.herokuapp.com/me";

export function* getUser() {
  if (localStorage.getItem("auth")) {
    try {
      let response = yield send_request("me", "GET", {});
      yield put({ type: GET_ME_SUCCESS, payload: { response } });
    } catch (error) {
      yield put({ type: GET_ME_FAILURE }, error);
    }
  }
}
