import { LOGIN_DETAILS, GET_ME , GET_MY_FOLDERS_REQUEST} from "./constant";
import { REGISTRATION_DETAILS } from "./constant";

export const sendLoginDetails = (data) => {
  return {
    type: LOGIN_DETAILS,
    payload: data,
  };
};

export const sendRegistrationDetails = (data) => {
  console.log("action is running", data);
  return {
    type: REGISTRATION_DETAILS,
    payload: data,
  };
};

export const getMe = () => {
  return {
    type: GET_ME,
  };
};

export const getMyFolders = () => {
  return {
    type: GET_MY_FOLDERS_REQUEST,
  };
} ;

