import {
  USER_ACTIVE,
  USER_INACTIVE,
  FT_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  REQUEST_LOGIN,
  REQUEST_SIGNUP,
  SIGNOUT_REQUEST,
  SIGNOUT_ERROR,
  SIGNOUT_SUCCESS,
} from '../constants/userConstants';

export const onboardingReducer = (
  state = {isActive: false, sessions: []},
  action,
) => {
  switch (action.type) {
    case USER_ACTIVE:
      return {...state, isActive: true};
    case USER_INACTIVE:
      return {...state, isActive: true};
    case FT_USER:
      return {...state, isActive: false};
    default:
      return state;
  }
};
export const authenticationReducer = (
  state = {authenticated: false, error: false, loginScreen: 0},
  action,
) => {
  switch (action.type) {
    // Signup = 0, Login = 1, Authenticated = 2
    case AUTH_ERROR:
      return {...state, authenticated: false, loginScreen: 1};
    case SIGNOUT_REQUEST:
      return {...state, authenticated: false, loginScreen: action.payload};
    case SIGNOUT_SUCCESS:
      return {...state, authenticated: false, loginScreen: action.payload};
    case REQUEST_SIGNUP:
      return {...state, authenticated: false, loginScreen: 0};
    case REQUEST_LOGIN:
      return {...state, authenticated: false, loginScreen: action.payload};
    case LOGIN_SUCCESS:
      return {...state, authenticated: true, loginScreen: 2};
    case SIGNUP_SUCCESS:
      return {...state, authenticated: true, loginScreen: 2};
    default:
      return state;
  }
};
