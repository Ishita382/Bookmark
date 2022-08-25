import { put } from "redux-saga/effects";
import { LOGOUT_FAILED, LOGOUT_SUCCESS } from "../actions/constant";

function* logoutUser(action) {
  try {
    localStorage.clear();
    yield put({ type: LOGOUT_SUCCESS });
    action.navigate("/login");
  } catch (error) {
    yield put({ type: LOGOUT_FAILED });
  }
}

export default logoutUser;
