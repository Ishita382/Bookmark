import { put } from "redux-saga/effects";
import send_request from "../Request";

import { asyncBookmarkTypes } from "../actions/asyncTypes";
function* createBookmark(action) {
  try {
    let item = {  name: action.payload.name, url: action.payload.url};
   
    let response = send_request("bookmark", "POST", {item});
    yield put({
      type: asyncBookmarkTypes.CREATE_BOOKMARK_SUCCESS,
      payload: { response },
    });
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
