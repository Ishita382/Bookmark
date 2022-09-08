import { put } from "redux-saga/effects";


import { asyncAuthTypes } from "../actions/asyncTypes";
function* logoutUser(action) {
  try {
    localStorage.clear();
    yield put({ type: asyncAuthTypes.LOGOUT_SUCCESS });
    action.navigate("/login");
  } catch (error) {
    yield put({ type: asyncAuthTypes.LOGOUT_FAILED });
  }
}

export default logoutUser;
