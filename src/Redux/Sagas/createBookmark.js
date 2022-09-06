import send_request from "../Request";
import { put } from "redux-saga/effects";
import {
  CREATE_BOOKMARK_FAILURE,
  CREATE_BOOKMARK_SUCCESS,
} from "../actions/constant";

function* createBookmark(action) {
  try {
    const item = {};
    item.url = action.payload.url;
    item.folderId = action.payload.folderId;
    let response = send_request("bookmark", "POST", item);
    yield put({ type: CREATE_BOOKMARK_SUCCESS, payload: { response } });
  } catch (error) {
    yield put({ type: CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
