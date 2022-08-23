import { LOGIN_DETAILS, GET_ME } from "./constant";
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

