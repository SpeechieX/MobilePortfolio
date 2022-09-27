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

import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AntDesign from 'react-native-vector-icons/AntDesign';

import UserBottomTabs from './components/navigation/UserBottomTabs';
import InboxScreen from './components/inbox/InboxScreen';
import Onboarding from './components/auth/Onboarding';

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
                  name="bars"
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
              drawerActiveBackgroundColor: 'black',
              drawerLabelStyle: {
                color: 'white',
              },
              drawerInactiveTintColor: 'grey',
              drawerStatusBarAnimation: 'fade',
              drawerStyle: {
                backgroundColor: 'black',
                color: 'white',
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
              drawerStyle: {
                backgroundColor: 'black',
                color: 'white',
              },
              drawerInactiveTintColor: 'grey',
              drawerLabelStyle: {
                color: 'white',
              },
              drawerStatusBarAnimation: 'fade',
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
