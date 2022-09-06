import { put } from "redux-saga/effects";
import { REGISTRATION_SUCCESS, REGISTRATION_FAILED } from "../actions/constant";
//import send_request from "../Request";

const register_api = "https://bookmarks-app-server.herokuapp.com/register";
export function* getRegistrationDetails(action) {
  const data = action.payload;
  const { regName: name, regEmail: email, regPassword: password } = data;
  if (data !== "") {
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
      yield put({ type: REGISTRATION_SUCCESS, response });
      //sending token to local storage
      localStorage.setItem("auth", JSON.stringify(response.token));
    } else {
      yield put({ type: REGISTRATION_FAILED });
    }
  }
}
