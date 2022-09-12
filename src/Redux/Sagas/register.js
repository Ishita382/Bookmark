import { put } from "redux-saga/effects";
import { asyncAuthTypes } from "../actions/asyncTypes";
const register_api = "https://bookmarks-app-server.herokuapp.com/register";
export function* getRegistrationDetails(action) {
  const data = action.payload;
  const { regName: name, regEmail: email, regPassword: password } = data;
  if (!data.isEmpty) {
    let response = yield fetch(register_api, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    response = yield response.json();

    if ("token" in response) {
      yield put({ type: asyncAuthTypes.REGISTRATION_SUCCESS, response });

      localStorage.setItem("auth", JSON.stringify(response.token));
    } else {
      yield put({ type: asyncAuthTypes.REGISTRATION_FAILED });
    }
  }
}
