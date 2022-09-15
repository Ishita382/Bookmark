import { put } from "redux-saga/effects";
import sendRequest from "../Request";
import { asyncBookmarkTypes } from "../actions/asyncTypes";
import { bookmarkId } from "../../utils/helpers";
function* getMyBookmarks(action) {
  const getFolderId = bookmarkId(action.payload);
  try {
    const response = yield sendRequest(getFolderId, "GET", {});
    yield put({
      type: asyncBookmarkTypes.GET_BOOKMARKS_SUCCESS,
      payload: { response },
    });
  } catch (error) {
    yield put({ type: asyncBookmarkTypes.GET_BOOKMARKS_FAILURE }, error);
  }
}

export default getMyBookmarks;
