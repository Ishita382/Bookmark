import { syncFolderTypes, syncAuthTypes, syncBookmarkTypes } from "../actions/syncTypes";
import { asyncBookmarkTypes, asyncAuthTypes, asyncFolderTypes } from "../actions/asyncTypes";
export const initialState = {
  folders: {},
  folderLoading: "initial",
  loginLoading: "initial",
  folderIds: [],
  openModal: false,
  createFolderParent: "",
  childFolders: [],
  renameModal: false,
  renameFolderId: "",
  parentId: "",
  selectedFolder: "",
  bookmarkFolder: "",
  bookmarks: {},
  rootBookmarks: [],
  bookmarkLoading: "initial",
  isOpen: {},
  registrationLoading:"initial",
 
};
export const loginDetails = (state = initialState, action) => {
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
      payload.response.map((item) => (state.folders[item.id] = item));
      payload.response.map((item) => arr.push(item.id));
      state.folders[state.parentId].childIds = arr;
      return { ...state };

    case asyncFolderTypes.CREATE_FOLDER_SUCCESS:
      state.folders[payload.response.id] = payload.response;
      if (state.createFolderParent === "") {
        state.folderIds.push(payload.response.id);
      } else {
        
        state.folders[state.createFolderParent].childIds.push(
          payload.response.id
        );
      }
      return { ...state };

    case asyncAuthTypes.LOGOUT_SUCCESS:
      return { ...initialState };

    case syncFolderTypes.OPEN_MODAL:
      return { ...state, openModal: true, createFolderParent: payload };

    case syncFolderTypes.CLOSE_MODAL:
      return { ...state, openModal: false };

    case syncFolderTypes.OPEN_RENAME_MODAL:
      return { ...state, renameModal: true,  renameFolderId: payload };

    case syncFolderTypes.CLOSE_RENAME_MODAL:
      return { ...state, renameModal: false };

    case asyncFolderTypes.RENAME_FOLDER_SUCCESS:
      state.folders[state.renameFolderId].name = payload.response.name;
      return { ...state };

    case syncFolderTypes.CREATE_FOLDER_REQUEST:
      return { ...state, create: false };

    case syncBookmarkTypes.GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        selectedFolder: payload,
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
      if (state.bookmarkFolder !== "") {
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
      if (state.selectedFolder === "") {
        state.rootBookmarks.push(payload.response.id);
      } else {
        state.folders[state.bookmarkFolder].bIds.push(
          payload.response.id
        );
      }

      return { ...state };
    }

    default:
      return state;
  }
};
