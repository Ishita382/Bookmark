import { useDispatch } from "react-redux";
import { syncBookmarkTypes } from "../actions/syncTypes";
export const useBookmarkHooks = () => {
  const dispatch = useDispatch();

  const getBookmarks = (id) => {
    return dispatch({
      type: syncBookmarkTypes.GET_BOOKMARKS_REQUEST,
      payload: id,
    });
  };

  const createBookmark = (url, folderId) => {
    return dispatch({
      type: syncBookmarkTypes.CREATE_BOOKMARK_REQUEST,
      payload: {
        url: url,
        folderId: folderId,
      },
    });
  };

  return {
    getBookmarks,
    createBookmark,
  };
};
