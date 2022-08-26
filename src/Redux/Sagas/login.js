import { put } from "redux-saga/effects";
import {
  LOGIN_DETAILS_FAILED,
  LOGIN_DETAILS_SUCCESS,
} from "../actions/constant";
//import { initialState } from "../reducers/reducers";
//import { initialState } from "../reducers/reducers";

const login_api = "https://bookmarks-app-server.herokuapp.com/login";

export function* getLoginDetails(action) {
  let data = action.payload;
  if (data !== "") {
    let response = yield fetch(login_api, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    response = yield response.json();
    console.log("login api", response);
    try {
      if ("token" in response) {
        yield put({ type: LOGIN_DETAILS_SUCCESS, response });
        //setting token to local storage
        localStorage.setItem("auth", JSON.stringify(response.token));
      }
    } catch (error) {
      yield put({ type: LOGIN_DETAILS_FAILED }, error);
    }
  }
}
