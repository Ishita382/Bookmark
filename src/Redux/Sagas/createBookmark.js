import { put } from "redux-saga/effects";
import sendRequest from "../Request";

import { asyncBookmarkTypes } from "../actions/asyncTypes";
function* createBookmark(action) {
  try {
    let item = {  name: action.payload.name, url: action.payload.url};
   
    let response = sendRequest("bookmark", "POST", {item});
    yield put({
      type: asyncBookmarkTypes.CREATE_BOOKMARK_SUCCESS,
      payload: { response },
    });
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
