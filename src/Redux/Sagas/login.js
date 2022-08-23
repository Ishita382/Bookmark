import { put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_DETAILS,
  LOGIN_DETAILS_FAILED,
  LOGIN_DETAILS_SUCCESS,
} from "../Actions/constant";

const login_api = "https://bookmarks-app-server.herokuapp.com/login";

function* getLoginDetails(action) {
  let data = action.payload;

  if (data !== "") {
    let result = yield fetch(login_api, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    result = yield result.json();
    console.log(result);
    if ("token" in result) {
      yield put({ type: LOGIN_DETAILS_SUCCESS, result });
      
      //setting token to local storage
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: LOGIN_DETAILS_FAILED });
    }
  }
}

function* loginDetails() {
  yield takeLatest(LOGIN_DETAILS, getLoginDetails);
}

export default loginDetails;
