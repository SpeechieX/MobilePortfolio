import React, {useState, useEffect, useContext} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PowerHeader from './components/navigation/PowerHeader';
import UserBottomTabs from './components/navigation/UserBottomTabs';

import {useSelector} from 'react-redux';

import Onboarding from './components/auth/Onboarding';

const Stack = createNativeStackNavigator();

const HomeScreenMenu = ({navigation}) => {
  return <Onboarding />;
};

const App = () => {
  const authenticated = useSelector(state => state.auth.loginScreen);
  return (
    <NavigationContainer>
      {authenticated !== 2 ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreenMenu}
            // options={{headerTitle: props => <LogoTitle {...props} />}}
            options={{headerTitle: '', headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <UserBottomTabs />
      )}
    </NavigationContainer>
  );
};

export default App;
