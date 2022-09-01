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
} from "../actions/constant";

export const initialState = {
  folders: [],
  folderLoading: "initial",
  loginLoading: "initial",
  rootIds: [],
  create: false,
  createFolderParent: "",
  childFolders: [],
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
      return { ...state, folders: payload.response, folderLoading: "false" };
    }

    case GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case CREATE_FOLDER_SUCCESS:
      let new_folders = [...state.folders];
      if (state.createFolderParent === "") {
        new_folders.push(action.payload.response);
      } else {
        state.childFolders.push(action.payload.response);
      }
      return { ...state, folders: [...new_folders] };

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

    default:
      return state;
  }
};
