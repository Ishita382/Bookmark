import { useDispatch } from "react-redux";
import { syncFolderTypes } from "../actions/syncTypes";
export const useFolderHooks = () => {
  const dispatch = useDispatch();

  const getMyFolders = () => {
    return dispatch({
      type: syncFolderTypes.GET_MY_FOLDERS_REQUEST,
    });
  };

  const createFolder = (name, createFolderParent) => {
    return dispatch({
      type: syncFolderTypes.CREATE_FOLDER_REQUEST,
      payload: {
        name: name,
        id: createFolderParent,
      },
    });
  };

  const renameFolder = (renameFolderId, folderName) => {
    return dispatch({
      type: syncFolderTypes.RENAME_FOLDER_REQUEST,
      payload: {
        folderId: renameFolderId,
        name: folderName,
      },
    });
  };



  const openModal = (id) => {
    return dispatch({
      type: syncFolderTypes.OPEN_MODAL,
      payload: id,
    });
  };

  const closeModal = () => {
    return dispatch({
      type: syncFolderTypes.CLOSE_MODAL,
    });
  };

  const openRenameModal = (id) => {
    return dispatch({
      type: syncFolderTypes.OPEN_RENAME_MODAL,
      payload: id,
    });
  };

  const closeRenameModal = () => {
    return dispatch({
      type: syncFolderTypes.CLOSE_RENAME_MODAL,
    });
  };

  const getFolderChildren = (id) => {
    return dispatch({
      type: syncFolderTypes.GET_FOLDER_CHILDREN_REQUEST,
      payload: id,
    });
  };


  return {
    getMyFolders,
    renameFolder,
    
    getFolderChildren,
    closeModal,
    openModal,
    closeRenameModal,
    openRenameModal,
   
    createFolder,
  };
};
