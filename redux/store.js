import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import {onboardingReducer, authenticationReducer} from './reducers/userReducer';

const reducer = combineReducers({
  onboarding: onboardingReducer,
  auth: authenticationReducer,
});

const initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
