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

  const createBookmark = (link, selectedFolder) => {
    return dispatch({
      type: syncBookmarkTypes.CREATE_BOOKMARK_REQUEST,
      payload: {
       link: link,
       folder: selectedFolder
      },
    });
  };

  return {
    getBookmarks,
    createBookmark,
  };
};
