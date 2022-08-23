import { put, takeLatest } from "redux-saga/effects";
import { REGISTRATION_DETAILS, REGISTRATION_SUCCESS, REGISTRATION_FAILED } from "../actions/constant";
//import send_request from "../Request";

const register_api = "https://bookmarks-app-server.herokuapp.com/register";
function* getRegistrationDetails(action) {
  const data = action.payload;
  const {regName:name, regEmail:email, regPassword:password} = data;
  if(data!==""){
    let result = yield fetch(register_api, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name, email, password}),
    });

    result = yield result.json();
    console.log(result);
    if ("token" in result) {
      yield put({ type: REGISTRATION_SUCCESS, result });
      //sending token to local storage
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: REGISTRATION_FAILED });
    }
}
}
function* registrationDetails() {
  yield takeLatest(REGISTRATION_DETAILS, getRegistrationDetails);
}

export default registrationDetails;
