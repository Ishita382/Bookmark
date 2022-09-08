import { put } from "redux-saga/effects";

import { authConst } from "../actions/authConstants";
function* logoutUser(action) {
  try {
    localStorage.clear();
    yield put({ type: authConst.LOGOUT_SUCCESS });
    action.navigate("/login");
  } catch (error) {
    yield put({ type: authConst.LOGOUT_FAILED });
  }
}

export default logoutUser;
