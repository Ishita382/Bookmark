import { takeLatest, takeEvery } from "redux-saga/effects";
import { getLoginDetails } from "./login";
import { getRegistrationDetails } from "./register";
import { getUser } from "./getMe";
import { getUserFolders } from "./getMyFolders";
import { createMyFolder } from "./createFolder";
import {
  asyncAuthTypes,
  asyncBookmarkTypes,
  asyncFolderTypes,
} from "../actions/asyncTypes";
import logoutUser from "./logout";
import renameFolder from "./rename";
import getFolderChildren from "./getFolderChildren";
import getMyBookmarks from "./getBookmarks";
import createBookmark from "./createBookmark";

function* mySaga() {
  yield takeLatest(asyncAuthTypes.LOGIN_REQUEST, getLoginDetails);
  yield takeLatest(asyncAuthTypes.REGISTRATION_REQUEST, getRegistrationDetails);
  yield takeLatest(asyncAuthTypes.GET_ME_REQUEST, getUser);
  yield takeLatest(asyncAuthTypes.LOGOUT_REQUEST, logoutUser);
  yield takeEvery(asyncFolderTypes.CREATE_FOLDER_REQUEST, createMyFolder);
  yield takeLatest(asyncFolderTypes.GET_MY_FOLDERS_REQUEST, getUserFolders);
  yield takeLatest(asyncFolderTypes.RENAME_FOLDER_REQUEST, renameFolder);
  yield takeLatest(
    asyncFolderTypes.GET_FOLDER_CHILDREN_REQUEST,
    getFolderChildren
  );
  yield takeLatest(asyncBookmarkTypes.GET_BOOKMARKS_REQUEST, getMyBookmarks);
  yield takeEvery(asyncBookmarkTypes.CREATE_BOOKMARK_REQUEST, createBookmark);
}

export default mySaga;
