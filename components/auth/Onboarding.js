import React, {useState, useReducer} from 'react';
import Login from './Login';
import Signup from './Signup';

import {useSelector} from 'react-redux';

const Onboarding = () => {
  let currentScreen = useSelector(state => state.auth.loginScreen);

  if (currentScreen !== 1) {
    return <Signup />;
  } else {
    return <Login />;
  }
};

export default Onboarding;
