import { useDispatch } from "react-redux";
import { asyncBookmarkTypes } from "../actions/asyncTypes";
export const useBookmarkHooks = () => {
  const dispatch = useDispatch();

  const getBookmarks = (id) => {
    return dispatch({
      type: asyncBookmarkTypes.GET_BOOKMARKS_REQUEST,
      payload: id,
    });
  };

  const createBookmark = (link, selectedFolder) => {
    return dispatch({
      type: asyncBookmarkTypes.CREATE_BOOKMARK_REQUEST,
      payload: {
        link: link,
        folder: selectedFolder,
      },
    });
  };

  return {
    getBookmarks,
    createBookmark,
  };
};
