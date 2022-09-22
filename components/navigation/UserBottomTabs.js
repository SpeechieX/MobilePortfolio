import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import UserProfile from '../profile/UserProfile';
import Activity from '../notifications/Activity';
import Dashboard from '../dashboard/Dashboard';
import Explore from '../explore/Explore';
import Pager from '../pager/Pager';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const UserBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: '',
          tabBarIcon: () => (
            <AntDesign
              name="home"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
          headerLeft: () => (
            <AntDesign
              name="menu-unfold"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
          headerRight: () => (
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
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="earth"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Call/Page"
        component={Pager}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="notification"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="dotchart"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign
              name="star"
              style={{
                color: '#000',
                fontSize: 25,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeftButton: {
    height: 30,
    width: 30,
  },
  headerRightButton: {
    height: 30,
    width: 30,
  },
});

export default UserBottomTabs;
