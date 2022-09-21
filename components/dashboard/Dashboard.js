import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ProfilePhoto from '../profile/ProfilePhoto';
import Status from './Status';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfilePhoto />
      <Status />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
