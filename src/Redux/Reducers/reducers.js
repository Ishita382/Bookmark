import {
  syncFolderTypes,
  syncAuthTypes,
  syncBookmarkTypes,
} from "../actions/syncTypes";
import {
  asyncBookmarkTypes,
  asyncAuthTypes,
  asyncFolderTypes,
} from "../actions/asyncTypes";
export const initialState = {
  folders: {},
  bookmarks: {},
  isOpen: {},
  folderIds: [],
  rootBookmarks: [],
  renameFolderId: "",
  parentId: "",
  bookmarkFolder: "",
  currentParentFolderId: "",
  setFolderIdToRename: false,
  openModal: false,
  bookmarkLoading: "initial",
  folderLoading: "initial",
  loginLoading: "initial",
  registrationLoading: "initial",
};
export const appReducers = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case asyncAuthTypes.LOGIN_SUCCESS:
      return { ...state, loginLoading: "false" };

    case asyncAuthTypes.LOGIN_FAILED:
      return { ...state, loginLoading: "true" };

    case syncAuthTypes.LOGIN_REQUEST:
      return { ...state, loginLoading: "inProgress" };

    case syncAuthTypes.REGISTRATION_REQUEST:
      return { ...state, registrationLoading: "inProgress" };

    case asyncAuthTypes.REGISTRATION_SUCCESS:
      return { ...state, registrationLoading: "false" };

    case asyncAuthTypes.REGISTRATION_FAILURE:
      return { ...state, registrationLoading: "true" };

    case syncFolderTypes.GET_MY_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case asyncFolderTypes.GET_MY_FOLDERS_SUCCESS: {
      const temp = [];
      payload.response.map((item) => temp.push(item.id));
      const obj = {};
      payload.response.map((item) => (obj[item.id] = item));
      return {
        ...state,
        folders: obj,
        folderIds: temp,
        folderLoading: "false",
      };
    }

    case asyncFolderTypes.GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case syncFolderTypes.GET_FOLDER_CHILDREN_REQUEST: {
      state.isOpen.hasOwnProperty(payload.id)
        ? (state.isOpen[payload.id] = !state.isOpen[payload.id])
        : (state.isOpen[payload.id] = true);
      return { ...state, parentId: payload };
    }

    case asyncFolderTypes.GET_FOLDER_CHILDREN_SUCCESS:
      const arr = [];
      let cloneFolders = {};
      cloneFolders = state.folders;
      payload.response.map((item) => (cloneFolders[item.id] = item));
      payload.response.map((item) => arr.push(item.id));
      cloneFolders[state.parentId].childIds = arr;
      return { ...state, folders: cloneFolders };

    case syncFolderTypes.SET_PARENT_ID:
      state.isOpen.hasOwnProperty(payload.id)
        ? (state.isOpen[payload.id] = !state.isOpen[payload.id])
        : (state.isOpen[payload.id] = true);
      return { ...state, parentId: payload.id };

    case asyncFolderTypes.CREATE_FOLDER_SUCCESS:
      let updatedFolders = {};
      updatedFolders = state.folders;
      updatedFolders[payload.response.id] = payload.response;
      if (state.currentParentFolderId === "") {
        state.folderIds.push(payload.response.id);
      } else {
        updatedFolders[state.currentParentFolderId].childIds.push(
          payload.response.id
        );
      }
      return { ...state, folders: updatedFolders };

    case asyncAuthTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    case syncFolderTypes.OPEN_MODAL:
      return { ...state, openModal: true, currentParentFolderId: payload };

    case syncFolderTypes.CLOSE_MODAL:
      return { ...state, openModal: false };

    case syncFolderTypes.OPEN_RENAME_MODAL:
      return { ...state, setFolderIdToRename: true, renameFolderId: payload };

    case syncFolderTypes.CLOSE_RENAME_MODAL:
      return { ...state, setFolderIdToRename: false };

    case asyncFolderTypes.RENAME_FOLDER_SUCCESS:
      state.folders[state.renameFolderId].name = payload.response.name;
      return { ...state };

    case syncFolderTypes.CREATE_FOLDER_REQUEST:
      return { ...state, create: false };

    case syncBookmarkTypes.GET_BOOKMARKS_REQUEST:
      return {
        ...state,

        bookmarkFolder: payload,
        bookmarkLoading: "inProgress",
      };

    case asyncBookmarkTypes.GET_BOOKMARKS_SUCCESS: {
      let bookmarkId = [];
      let rootBookmarkId = [];
      payload.response.map((item) =>
        state.bookmarkFolder === ""
          ? rootBookmarkId.push(item.id)
          : bookmarkId.push(item.id)
      );
      const object = {};
      payload.response.map((item) => (object[item.id] = item));
      if (!state.bookmarkFolder.isEmpty) {
        state.folders[state.bookmarkFolder].bIds = bookmarkId;
      }

      return {
        ...state,
        rootBookmarks: rootBookmarkId,
        bookmarks: { ...state.bookmarks, ...object },
        bookmarkLoading: "false",
      };
    }

    case asyncBookmarkTypes.CREATE_BOOKMARK_SUCCESS: {
      state.bookmarks[payload.response.id] = payload.response;
      if (state.bookmarkFolder.isEmpty) {
        state.rootBookmarks.push(payload.response.id);
      } else {
        state.folders[state.bookmarkFolder].bIds.push(payload.response.id);
      }

      return { ...state };
    }

    default:
      return state;
  }
};
