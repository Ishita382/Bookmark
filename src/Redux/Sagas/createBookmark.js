import { put } from "redux-saga/effects";
import sendRequest from "../Request";

import { asyncBookmarkTypes } from "../actions/asyncTypes";
function* createBookmark(action) {
  try {
    let item = { url: action.payload.link };
    if (action.payload.folder !== "") {
      item.folderId = action.payload.folder;
    }
    // if(action.payload.description!==""){
    //   item.folderId = action.payload.description;
    // }
    let response = sendRequest("bookmark", "POST", item);
    yield put({
      type: asyncBookmarkTypes.CREATE_BOOKMARK_SUCCESS,
      payload: { response },
    });
    console.log(response);
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
