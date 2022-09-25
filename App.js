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
import InboxScreen from './components/inbox/InboxScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {useSelector} from 'react-redux';

import Onboarding from './components/auth/Onboarding';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Your Dashboard"
            component={UserBottomTabs}
            options={{
              headerTitle: '',
              drawerIcon: () => {
                <AntDesign
                  name="inbox"
                  style={{
                    color: '#000',
                    fontSize: 25,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                  }}
                />;
              },
            }}
          />
          <Drawer.Screen
            name="Messages"
            component={InboxScreen}
            options={{
              headerTitle: '',
              drawerIcon: () => {
                <AntDesign
                  name="inbox"
                  style={{
                    color: '#000',
                    fontSize: 25,
                    marginLeft: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 6,
                  }}
                />;
              },
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
