import {
  LOGIN_DETAILS_FAILED,
  LOGIN_DETAILS_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  GET_MY_FOLDERS_SUCCESS
} from "../actions/constant";

export const initialState = {
  folders : [],
};
export const loginDetails = (state = initialState, action) => {
  const response = action.response;
  switch (action.type) {
    case LOGIN_DETAILS_SUCCESS:
      console.log("reducer is running");
      return { ...state, response };

    case LOGIN_DETAILS_FAILED:
      return { ...state, response };

    case REGISTRATION_SUCCESS:
      return { ...state, response };

    case REGISTRATION_FAILED:
      return { ...state, response };

      case GET_MY_FOLDERS_SUCCESS:
        return { ...state, folders : response};
    default:
      return state;
  }
};
