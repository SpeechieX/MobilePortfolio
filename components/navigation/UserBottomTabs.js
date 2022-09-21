import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import UserProfile from '../profile/UserProfile';
import Activity from '../notifications/Activity';
import Dashboard from '../dashboard/Dashboard';
import Explore from '../explore/Explore';
import Pager from '../pager/Pager';

const Tab = createBottomTabNavigator();

const UserBottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="My Menu"
              color="#000"
              style={styles.headerLeftButton}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Inbox"
              color="#000"
              style={styles.headerRightButton}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Call/Page"
        component={Pager}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
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
