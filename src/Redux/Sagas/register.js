import { put } from "redux-saga/effects";
import { asyncAuthTypes } from "../actions/asyncTypes";
import sendRequest from "../Request";

export function* getRegistrationDetails(action) {
  try {
    const data = action.payload;
    const { regName: name, regEmail: email, regPassword: password } = data;
    if (!data.isEmpty) {
      let response = yield sendRequest("register", "post", {
        name,
        email,
        password,
      });

      response = yield response.json();

      if ("token" in response) {
        yield put({ type: asyncAuthTypes.REGISTRATION_SUCCESS, response });
        localStorage.setItem("auth", JSON.stringify(response.token));
      }
    }
  } catch (error) {
    yield put({ type: asyncAuthTypes.REGISTRATION_FAILURE });
  }
}
