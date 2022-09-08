
import { put } from "redux-saga/effects";
import send_request from "../Request";


import { asyncBookmarkTypes } from "../actions/asyncTypes";
function* createBookmark(action) {
  try {
    const item = {};
    item.url = action.payload.url;
    item.folderId = action.payload.folderId;
    let response = send_request("bookmark", "POST", item);
    yield put({ type: asyncBookmarkTypes.CREATE_BOOKMARK_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
