import { useDispatch } from "react-redux";
import { asyncAuthTypes } from "../actions/asyncTypes";
export const useAuthHooks = () => {
  const dispatch = useDispatch();

  const registerUser = (data) => {
    return dispatch({
      type: asyncAuthTypes.REGISTRATION_REQUEST,
      payload: data,
    });
  };

  const loginUser = (data) => {
    return dispatch({
      type: asyncAuthTypes.LOGIN_REQUEST,
      payload: data,
    });
  };

  const getMe = () => {
    return dispatch({
      type: asyncAuthTypes.GET_ME_REQUEST,
    });
  };

  const logout = (navigate) => {
    return dispatch({
      type: asyncAuthTypes.LOGOUT_REQUEST,
      navigate: navigate,
    });
  };

  const useGetMe = () => {
    return dispatch({
      type: asyncAuthTypes.USE_GET_ME,
    });
  };
  return {
    loginUser,
    logout,
    getMe,
    registerUser,
    useGetMe,
  };
};
