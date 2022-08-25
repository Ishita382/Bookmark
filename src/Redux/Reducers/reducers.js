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
} from "../actions/constant";

export const initialState = {
  folders: [],
  folderLoading: "initial",
  loginLoading: "initial",
};
export const loginDetails = (state = initialState, action) => {
  const response = action.response;
  switch (action.type) {
    case LOGIN_DETAILS_SUCCESS:
      console.log("reducer is running");
      return { ...state, loginLoading: "false" };

    case LOGIN_DETAILS_FAILED:
      return { ...state, loginLoading: "true" };

    case LOGIN_DETAILS:
      return { ...state, loginLoading: "inProgress" };

    case REGISTRATION_SUCCESS:
      return { ...state, response };

    case REGISTRATION_FAILED:
      return { ...state, response };

    case GET_MY_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case GET_MY_FOLDERS_SUCCESS:
      return { ...state, folders: response, folderLoading: "false" };

    case GET_MY_FOLDERS_FAILURE:
      return { ...state, folderLoading: "true" };

    case CREATE_FOLDER_SUCCESS:
      return { ...state, ...action.payload };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return state;
  }
};
