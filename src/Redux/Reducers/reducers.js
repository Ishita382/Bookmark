import {
  LOGIN_DETAILS_FAILED,
  LOGIN_DETAILS_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  GET_MY_FOLDERS_SUCCESS,
  CREATE_FOLDER_SUCCESS,
  GET_MY_FOLDERS_REQUEST,
  GET_MY_FOLDERS_FAILURE,
  LOGIN_DETAILS,
  LOGOUT_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_RENAME_MODAL,
  CLOSE_RENAME_MODAL,
  CREATE_FOLDER_REQUEST,
  GET_FOLDER_CHILDREN_REQUEST,
  GET_FOLDER_CHILDREN_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_SUCCESS,
  RENAME_FOLDER_SUCCESS,
} from "../actions/constant";

export const initialState = {
  folders: {},
  folderLoading: "initial",
  loginLoading: "initial",
  folderIds: [],
  create: false,
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
};
export const loginDetails = (state = initialState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case LOGIN_DETAILS_SUCCESS:
      console.log("reducer is running");
      return { ...state, loginLoading: "false" };

    case LOGIN_DETAILS_FAILED:
      return { ...state, loginLoading: "true" };

    case LOGIN_DETAILS:
      return { ...state, loginLoading: "inProgress" };

    case REGISTRATION_SUCCESS:
      return { ...state, payload };

    case REGISTRATION_FAILED:
      return { ...state, payload };

    case GET_MY_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case GET_MY_FOLDERS_SUCCESS: {
      const temp = [];
      action.payload.response.map((item) => temp.push(item.id));
      const obj = {};
      action.payload.response.map((item) => (obj[item.id] = item));
      return {
        ...state,
        folders: obj,
        folderIds: temp,
        folderLoading: "false",
      };
    }

    case GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case GET_FOLDER_CHILDREN_REQUEST: {
      state.isOpen.hasOwnProperty(action.payload.id)
        ? (state.isOpen[action.payload.id] = !state.isOpen[action.payload.id])
        : (state.isOpen[action.payload.id] = true);
      return { ...state, parentId: action.payload };
    }

    case GET_FOLDER_CHILDREN_SUCCESS:
      const arr = [];
      action.payload.response.map((item) => (state.folders[item.id] = item));
      action.payload.response.map((item) => arr.push(item.id));
      state.folders[state.parentId].childIds = arr;
      return { ...state };

    case CREATE_FOLDER_SUCCESS:
      state.folders[action.payload.response.id] = action.payload.response;
      if (state.createFolderParent === "") {
        state.folderIds.push(action.payload.response.id);
      } else {
        console.log(
          "create folder parent",
          state.folders[state.createFolderParent]
        );
        state.folders[state.createFolderParent].childIds.push(
          action.payload.response.id
        );
      }
      return { ...state };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    case OPEN_MODAL:
      return { ...state, create: true, createFolderParent: action.payload };

    case CLOSE_MODAL:
      return { ...state, create: false };

    case OPEN_RENAME_MODAL:
      return { ...state, renameModal: true, renameFolderId: action.payload };

    case CLOSE_RENAME_MODAL:
      return { ...state, renameModal: false };

    case RENAME_FOLDER_SUCCESS:
      state.folders[state.renameFolderId].name = action.payload.response.name;
      return { ...state };

    case CREATE_FOLDER_REQUEST:
      return { ...state, create: false };

    case GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        selectedFolder: action.payload,
        bookmarkFolder: action.payload,
        bookmarkLoading: "inProgress",
      };

    case GET_BOOKMARKS_SUCCESS: {
      let bookmarkId = [];
      let rootBookmarkId = [];
      action.payload.response.map((item) =>
        state.bookmarkFolder === ""
          ? rootBookmarkId.push(item.id)
          : bookmarkId.push(item.id)
      );
      const object = {};
      action.payload.response.map((item) => (object[item.id] = item));
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

    case CREATE_BOOKMARK_SUCCESS: {
      state.bookmarks[action.payload.response.id] = action.payload.response;
      if (state.selectedFolder === "") {
        state.rootBookmarks.push(action.payload.response.id);
      } else {
        state.folders[state.bookmarkFolder].bIds.push(
          action.payload.response.id
        );
      }

      return { ...state };
    }

    default:
      return state;
  }
};
