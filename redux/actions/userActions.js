import {
  USER_ACTIVE,
  USER_INACTIVE,
  FT_USER,
  REQUEST_SIGNUP,
  REQUEST_LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
} from '../constants/userConstants';

export const firstTimeUser = () => {};

export const requestSignup = () => async dispatch => {
  try {
    dispatch({type: REQUEST_SIGNUP});
  } catch (err) {
    console.log('ERROR');
  }
};

export const requestSignout = data => async dispatch => {
  try {
    dispatch({type: SIGNOUT_REQUEST});
  } catch (err) {
    console.log('error signing out, code', data, err);
  }
};
export const requestLogin = data => async dispatch => {
  try {
    dispatch({type: REQUEST_LOGIN, payload: data});
  } catch (err) {
    dispatch({type: LOGIN_ERROR});
  }
};

export const userSuccess = data => async dispatch => {
  try {
    dispatch({type: LOGIN_SUCCESS});
  } catch (err) {
    dispatch({type: LOGIN_ERROR});
  }
};
