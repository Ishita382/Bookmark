import { put } from "redux-saga/effects";
import send_request from "../Request";
import {
  GET_BOOKMARKS_FAILURE,
  GET_BOOKMARKS_SUCCESS,
} from "../actions/constant";

function* getMyBookmarks(action) {
  try {
    const response = yield send_request(
      `folder-bookmarks?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({ type: GET_BOOKMARKS_SUCCESS, payload: { response } });
    console.log("bookmarks", response);
  } catch (error) {
    yield put({ type: GET_BOOKMARKS_FAILURE }, error);
  }
}

export default getMyBookmarks;
