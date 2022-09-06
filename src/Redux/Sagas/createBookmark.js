import send_request from "../Request";
import { put } from "redux-saga/effects";
import {
  CREATE_BOOKMARK_FAILURE,
  CREATE_BOOKMARK_SUCCESS,
} from "../actions/constant";

function* createBookmark(action) {
  try {
    let data = { url: action.payload.url };
    if (action.payload.folderId !== "") {
      data.folderId = action.payload.folderId;
    }
    const response = send_request("bookmark", "POST", data);
    yield put({ type: CREATE_BOOKMARK_SUCCESS, payload: { response } });
    console.log(response);
  } catch (error) {
    yield put({ type: CREATE_BOOKMARK_FAILURE }, error);
  }
}

export default createBookmark;
