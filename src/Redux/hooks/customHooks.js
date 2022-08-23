import { useDispatch } from "react-redux";
import {
  REGISTRATION_DETAILS,
  LOGIN_DETAILS,
  GET_ME_REQUEST,
  GET_MY_FOLDERS_REQUEST,
} from "../actions/constant";

export const useCustomHooks = () => {
  const dispatch = useDispatch();

  const sendRegistrationDetails = (data) => {
    return dispatch({
      type: REGISTRATION_DETAILS,
      payload: data,
    });
  };

  const sendLoginDetails = (data) => {
    return dispatch({
      type: LOGIN_DETAILS,
      payload: data,
    });
  };

  const getMe = () => {
    return dispatch({
      type: GET_ME_REQUEST,
    });
  };

  const getMyFolders = () => {
    return dispatch({
      type: GET_MY_FOLDERS_REQUEST,
    });
  };

  return { sendRegistrationDetails, sendLoginDetails, getMe, getMyFolders };
};
