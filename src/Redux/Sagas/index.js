import { takeLatest } from "redux-saga/effects";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";
import { getUser } from "./getMe";
import { getUserFolders } from "./getMyFolders";
import { createMyFolder } from "./createFolder";
import delete_folder from "./delete";
import {
  CREATE_FOLDER_REQUEST,
  LOGIN_DETAILS,
  REGISTRATION_DETAILS,
  GET_MY_FOLDERS_REQUEST,
  GET_ME_REQUEST,
  LOGOUT_REQUEST,
  DELETE_FOLDER_REQUEST,
  RENAME_FOLDER_REQUEST,
  GET_FOLDER_CHILDREN_REQUEST
} from "../actions/constant";
import logoutUser from "./logout";
import renameFolder from "./rename";
import getFolderChildren from "./getFolderChildren";

function* mySaga() {
  yield takeLatest(LOGIN_DETAILS, getLoginDetails);
  yield takeLatest(REGISTRATION_DETAILS, getRegistrationDetails);
  yield takeLatest(GET_MY_FOLDERS_REQUEST, getUserFolders);
  yield takeLatest(GET_ME_REQUEST, getUser);
  yield takeLatest(CREATE_FOLDER_REQUEST, createMyFolder);
  yield takeLatest(LOGOUT_REQUEST, logoutUser);
  yield takeLatest(DELETE_FOLDER_REQUEST, delete_folder);
  yield takeLatest(RENAME_FOLDER_REQUEST, renameFolder);
  yield takeLatest(GET_FOLDER_CHILDREN_REQUEST, getFolderChildren);
  
}

export default mySaga;
