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
  DELETE_FOLDER_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_RENAME_MODAL,
  CLOSE_RENAME_MODAL,
  CREATE_FOLDER_REQUEST,
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
  renameFolderId: ""
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
      action.payload.response.map((item) => {temp.push(item.id)});
      const obj = {}
      action.payload.response.map((item) => {obj[item.id] = item});
      return { ...state, folders: obj, folderIds : temp, folderLoading: "false" };
    }

    case GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case CREATE_FOLDER_SUCCESS:
      
      state.folders[action.payload.response.id] = action.payload.response;
     if (state.createFolderParent === "") {
        state.folderIds.push(action.payload.response.id);
      } else {
       state.folders[state.createFolderParent].childIds.push(action.payload.response.id);
      }
      return { ...state };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    case DELETE_FOLDER_SUCCESS: {
      // const remainingFolders = state.folders.filter((item) => item.id!==payload.id);
      return { ...state };
    }

    case OPEN_MODAL:
      console.log("open modal reducer", action.payload);
      return { ...state, create: true, createFolderParent: action.payload };

      case CLOSE_MODAL:
        return {...state, create: false};

        case OPEN_RENAME_MODAL:
          return {...state, renameModal : true, renameFolderId: action.payload }

          case CLOSE_RENAME_MODAL:
            return {...state, renameModal : false};

            case CREATE_FOLDER_REQUEST:
              return {...state, create : false};

    default:
      return state;
  }
};
