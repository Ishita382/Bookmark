import {
  LOGIN_DETAILS_FAILED,
  LOGIN_DETAILS_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../Actions/constant";

export const loginDetails = (state = [], action) => {
  const response = action.result;
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
    default:
      return state;
  }
};
