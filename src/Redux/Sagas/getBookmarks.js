import { put } from "redux-saga/effects";
import send_request from "../Request";
import { asyncBookmarkTypes } from "../actions/asyncTypes";

function* getMyBookmarks(action) {
  try {
    const response = yield send_request(
      `folder-bookmarks?folderId=${action.payload}`,
      "GET",
      {}
    );
    yield put({ type: asyncBookmarkTypes.GET_BOOKMARKS_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.GET_BOOKMARKS_FAILURE }, error);
  }
}

export default getMyBookmarks;
