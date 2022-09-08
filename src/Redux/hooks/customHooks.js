import { useDispatch } from "react-redux";
import { authConst } from "../actions/authConstants";
import { folderConst } from "../actions/folderConstants";
import { bookmarkConst } from "../actions/bookmarkConstants";
export const useCustomHooks = () => {
  const dispatch = useDispatch();

  const sendRegistrationDetails = (data) => {
    return dispatch({
      type: authConst.REGISTRATION_DETAILS,
      payload: data,
    });
  };

  const sendLoginDetails = (data) => {
    return dispatch({
      type: authConst.LOGIN_DETAILS,
      payload: data,
    });
  };

  const getMe = () => {
    return dispatch({
      type: authConst.GET_ME_REQUEST,
    });
  };

  const getMyFolders = () => {
    return dispatch({
      type: folderConst.GET_MY_FOLDERS_REQUEST,
    });
  };

  const createFolder = (name, createFolderParent) => {
    return dispatch({
      type: folderConst.CREATE_FOLDER_REQUEST,
      payload: {
        name: name,
        id: createFolderParent,
      },
    });
  };

  const logout = (navigate) => {
    return dispatch({
      type: authConst.LOGOUT_REQUEST,
      navigate: navigate,
    });
  };

  const renameFolder = (renameFolderId, folderName) => {
    return dispatch({
      type: folderConst.RENAME_FOLDER_REQUEST,
      payload: {
        folderId: renameFolderId,
        name: folderName,
      },
    });
  };

  const addSubFolder = (folderId) => {
    return dispatch({
      type: folderConst.ADD_SUBFOLDER_REQUEST,
      payload: {
        folderId: folderId,
      },
    });
  };

  const openModal = (id) => {
    return dispatch({
      type: folderConst.OPEN_MODAL,
      payload: id,
    });
  };

  const closeModal = () => {
    return dispatch({
      type: folderConst.CLOSE_MODAL,
    });
  };

  const openRenameModal = (id) => {
    return dispatch({
      type: folderConst.OPEN_RENAME_MODAL,
      payload: id,
    });
  };

  const closeRenameModal = () => {
    return dispatch({
      type: folderConst.CLOSE_RENAME_MODAL,
    });
  };

  const getFolderChildren = (id) => {
    return dispatch({
      type: folderConst.GET_FOLDER_CHILDREN_REQUEST,
      payload: id,
    });
  };

  const getCurrentFolder = (id) => {
    return dispatch({
      type: folderConst.GET_CURRENT_FOLDER_REQUEST,
      payload: id,
    });
  };

  const getBookmarks = (id) => {
    return dispatch({
      type: bookmarkConst.GET_BOOKMARKS_REQUEST,
      payload: id,
    });
  };

  const createBookmark = (url, folderId) => {
    return dispatch({
      type: bookmarkConst.CREATE_BOOKMARK_REQUEST,
      payload: {
        url: url,
        folderId: folderId,
      },
    });
  };

  return {
    sendRegistrationDetails,
    sendLoginDetails,
    getMe,
    getMyFolders,
    createFolder,
    logout,

    renameFolder,
    addSubFolder,
    openModal,
    closeModal,
    openRenameModal,
    closeRenameModal,
    getFolderChildren,
    getCurrentFolder,
    getBookmarks,
    createBookmark,
  };
};
