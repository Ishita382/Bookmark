import { put } from "redux-saga/effects";


import { asyncAuthTypes } from "../actions/asyncTypes";
const login_api = "https://bookmarks-app-server.herokuapp.com/login";

export function* getLoginDetails(action) {
  let data = action.payload;
  if (!data.isEmpty) {
    let response = yield fetch(login_api, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    response = yield response.json();
   
    try {
      if ("token" in response) {
        yield put({ type: asyncAuthTypes.LOGIN_SUCCESS, response });
        
        localStorage.setItem("auth", JSON.stringify(response.token));
      }
    } catch (error) {
      yield put({ type: asyncAuthTypes.LOGIN_FAILED }, error);
    }
  }
}
