import { useDispatch } from "react-redux";
import { asyncFolderTypes } from "../actions/asyncTypes";
export const useFolderHooks = () => {
  const dispatch = useDispatch();

  const getMyFolders = () => {
    return dispatch({
      type: asyncFolderTypes.GET_MY_FOLDERS_REQUEST,
    });
  };

  const createFolder = (name, createFolderParent) => {
    return dispatch({
      type: asyncFolderTypes.CREATE_FOLDER_REQUEST,
      payload: {
        name: name,
        id: createFolderParent,
      },
    });
  };

  const renameFolder = (renameFolderId, folderName) => {
    return dispatch({
      type: asyncFolderTypes.RENAME_FOLDER_REQUEST,
      payload: {
        folderId: renameFolderId,
        name: folderName,
      },
    });
  };

  const setSubFolderId = (id) => {
    return dispatch({
      type: asyncFolderTypes.SET_SUBFOLDER_ID,
      payload: id,
    });
  };

  const closeModal = () => {
    return dispatch({
      type: asyncFolderTypes.CLOSE_MODAL,
    });
  };

  const setRenameFolderId = (id) => {
    return dispatch({
      type: asyncFolderTypes.SET_RENAMEFOLDER_ID,
      payload: id,
    });
  };

  const closeRenameModal = () => {
    return dispatch({
      type: asyncFolderTypes.CLOSE_RENAME_MODAL,
    });
  };

  const getFolderChildren = (id) => {
    return dispatch({
      type: asyncFolderTypes.GET_FOLDER_CHILDREN_REQUEST,
      payload: id,
    });
  };

  const setParent = (id) => {
    return dispatch({
      type: asyncFolderTypes.SET_PARENT_ID,
      payload: {
        id: id,
      },
    });
  };

  return {
    getMyFolders,
    renameFolder,
    setParent,
    getFolderChildren,
    closeModal,
    setSubFolderId,
    closeRenameModal,
    setRenameFolderId,
    createFolder,
  };
};
