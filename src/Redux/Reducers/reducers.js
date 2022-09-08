import { authConst } from "../actions/authConstants";
import { folderConst } from "../actions/folderConstants";
import { bookmarkConst } from "../actions/bookmarkConstants";
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
  registrationLoading:"initial"
};
export const loginDetails = (state = initialState, action) => {
 
  switch (action.type) {
    case authConst.LOGIN_SUCCESS:
      console.log("reducer is running");
      return { ...state, loginLoading: "false" };

    case authConst.LOGIN_FAILED:
      return { ...state, loginLoading: "true" };

    case authConst.LOGIN_REQUEST:
      return { ...state, loginLoading: "inProgress" };

      case authConst.REGISTRATION_REQUEST:
        return { ...state, registrationLoading: "inProgress" };

    case authConst.REGISTRATION_SUCCESS:
      return { ...state, registrationLoading: "false" };

    case authConst.REGISTRATION_FAILURE:
      return { ...state, registrationLoading: "true" };

    case folderConst.GET_MY_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case folderConst.GET_MY_FOLDERS_SUCCESS: {
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

    case folderConst.GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case folderConst.GET_FOLDER_CHILDREN_REQUEST: {
      state.isOpen.hasOwnProperty(action.payload.id)
        ? (state.isOpen[action.payload.id] = !state.isOpen[action.payload.id])
        : (state.isOpen[action.payload.id] = true);
      return { ...state, parentId: action.payload };
    }

    case folderConst.GET_FOLDER_CHILDREN_SUCCESS:
      const arr = [];
      action.payload.response.map((item) => (state.folders[item.id] = item));
      action.payload.response.map((item) => arr.push(item.id));
      state.folders[state.parentId].childIds = arr;
      return { ...state };

    case folderConst.CREATE_FOLDER_SUCCESS:
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

    case authConst.LOGOUT_SUCCESS:
      return { ...initialState };

    case folderConst.OPEN_MODAL:
      return { ...state, create: true, createFolderParent: action.payload };

    case folderConst.CLOSE_MODAL:
      return { ...state, create: false };

    case folderConst.OPEN_RENAME_MODAL:
      return { ...state, renameModal: true, renameFolderId: action.payload };

    case folderConst.CLOSE_RENAME_MODAL:
      return { ...state, renameModal: false };

    case folderConst.RENAME_FOLDER_SUCCESS:
      state.folders[state.renameFolderId].name = action.payload.response.name;
      return { ...state };

    case folderConst.CREATE_FOLDER_REQUEST:
      return { ...state, create: false };

    case bookmarkConst.GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        selectedFolder: action.payload,
        bookmarkFolder: action.payload,
        bookmarkLoading: "inProgress",
      };

    case bookmarkConst.GET_BOOKMARKS_SUCCESS: {
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

    case bookmarkConst.CREATE_BOOKMARK_SUCCESS: {
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
