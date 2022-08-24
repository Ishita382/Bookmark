import { takeLatest } from "redux-saga/effects";
import {getLoginDetails} from "./login";
import {getRegistrationDetails} from "./register";
import {getUser} from "./getMe";
import {getUserFolders} from "./getMyFolders";
import {createMyFolder} from "./createFolder";
import {
  CREATE_FOLDER_REQUEST,
  LOGIN_DETAILS,
  REGISTRATION_DETAILS,
  GET_MY_FOLDERS_REQUEST,
  GET_ME_REQUEST
} from "../actions/constant";
function* mySaga() {
  yield takeLatest(LOGIN_DETAILS, getLoginDetails);
  yield takeLatest(REGISTRATION_DETAILS, getRegistrationDetails);
  yield takeLatest(GET_MY_FOLDERS_REQUEST, getUserFolders);
  yield takeLatest(GET_ME_REQUEST, getUser);
  yield takeLatest(CREATE_FOLDER_REQUEST, createMyFolder);
}

export default mySaga;
