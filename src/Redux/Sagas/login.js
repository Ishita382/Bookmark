import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncAuthTypes } from "../actions/asyncTypes";
export function* getLoginDetails(action) {
  let data = action.payload;
  if (!data.isEmpty) {
    try {
      let response = yield sendRequest("login", "POST", data);
      if ("token" in response) {
        yield put({ type: asyncAuthTypes.LOGIN_SUCCESS, response });

        localStorage.setItem("auth", JSON.stringify(response.token));
      }
    } catch (error) {
      yield put({ type: asyncAuthTypes.LOGIN_FAILURE }, error);
    }
  }
}
