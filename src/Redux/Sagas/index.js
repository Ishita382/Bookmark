import { takeLatest, takeEvery } from "redux-saga/effects";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";
import { getUser } from "./getMe";
import { getUserFolders } from "./getMyFolders";
import { createMyFolder } from "./createFolder";
import {
  syncAuthTypes,
  syncBookmarkTypes,
  syncFolderTypes,
} from "../actions/syncTypes";
import logoutUser from "./logout";
import renameFolder from "./rename";
import getFolderChildren from "./getFolderChildren";
import getMyBookmarks from "./getBookmarks";
import createBookmark from "./createBookmark";

function* mySaga() {
  yield takeLatest(syncAuthTypes.LOGIN_REQUEST, getLoginDetails);
  yield takeLatest(syncAuthTypes.REGISTRATION_REQUEST, getRegistrationDetails);
  yield takeLatest(syncAuthTypes.GET_ME_REQUEST, getUser);
  yield takeLatest(syncAuthTypes.LOGOUT_REQUEST, logoutUser);
  yield takeEvery(syncFolderTypes.CREATE_FOLDER_REQUEST, createMyFolder);
  yield takeLatest(syncFolderTypes.GET_MY_FOLDERS_REQUEST, getUserFolders);
  yield takeLatest(syncFolderTypes.RENAME_FOLDER_REQUEST, renameFolder);
  yield takeLatest(
    syncFolderTypes.GET_FOLDER_CHILDREN_REQUEST,
    getFolderChildren
  );
  yield takeLatest(syncBookmarkTypes.GET_BOOKMARKS_REQUEST, getMyBookmarks);
  yield takeEvery(syncBookmarkTypes.CREATE_BOOKMARK_REQUEST, createBookmark);
}

export default mySaga;
