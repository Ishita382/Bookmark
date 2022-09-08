import { takeLatest } from "redux-saga/effects";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";
import { getUser } from "./getMe";
import { getUserFolders } from "./getMyFolders";
import { createMyFolder } from "./createFolder";
import { authConst } from "../actions/authConstants";
import { folderConst } from "../actions/folderConstants";
import { bookmarkConst } from "../actions/bookmarkConstants";
import logoutUser from "./logout";
import renameFolder from "./rename";
import getFolderChildren from "./getFolderChildren";
import currentFolder from "./currentFolder";
import getMyBookmarks from "./getBookmarks";
import createBookmark from "./createBookmark";

function* mySaga() {
  yield takeLatest(authConst.LOGIN_REQUEST, getLoginDetails);
  yield takeLatest(authConst.REGISTRATION_REQUEST, getRegistrationDetails);
  yield takeLatest(authConst.GET_ME_REQUEST, getUser);
  yield takeLatest(authConst.LOGOUT_REQUEST, logoutUser);
  yield takeLatest(folderConst.CREATE_FOLDER_REQUEST, createMyFolder);
  yield takeLatest(folderConst.GET_MY_FOLDERS_REQUEST, getUserFolders);
  yield takeLatest(folderConst.RENAME_FOLDER_REQUEST, renameFolder);
  yield takeLatest(folderConst.GET_FOLDER_CHILDREN_REQUEST, getFolderChildren);
  yield takeLatest(folderConst.GET_CURRENT_FOLDER_REQUEST, currentFolder);
  yield takeLatest(bookmarkConst.GET_BOOKMARKS_REQUEST, getMyBookmarks);
  yield takeLatest(bookmarkConst.CREATE_BOOKMARK_REQUEST, createBookmark);
}

export default mySaga;
