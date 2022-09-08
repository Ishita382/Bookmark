import { useDispatch } from "react-redux";
import { syncAuthTypes } from "../actions/syncTypes";
export const useAuthHooks = () => {
  const dispatch = useDispatch();

  const sendRegistrationDetails = (data) => {
    return dispatch({
      type: syncAuthTypes.REGISTRATION_REQUEST,
      payload: data,
    });
  };

  const sendLoginDetails = (data) => {
    return dispatch({
      type: syncAuthTypes.LOGIN_REQUEST,
      payload: data,
    });
  };

  const getMe = () => {
    return dispatch({
      type: syncAuthTypes.GET_ME_REQUEST,
    });
  };

  const logout = (navigate) => {
    return dispatch({
      type: syncAuthTypes.LOGOUT_REQUEST,
      navigate: navigate,
    });
  };

  return {
    sendLoginDetails,
    logout,
    getMe,
    sendRegistrationDetails,
  };
};
