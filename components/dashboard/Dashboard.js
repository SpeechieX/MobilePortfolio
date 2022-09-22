import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import ProfilePhoto from '../profile/ProfilePhoto';
import Status from './Status';
import SentYouAMessage from '../shared/SentYouAMessage';
import SharedAPost from '../shared/SharedAPost';

const screenWidth = Dimensions.get('window').width;

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfilePhoto />
      <Status />
      <ScrollView style={styles.alertScrollView}>
        <SentYouAMessage />
        <SharedAPost />
        <SentYouAMessage />
        <SharedAPost />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertScrollView: {
    // borderWidth: 1,
    width: screenWidth * 0.98,
    marginTop: 40,
  },
});

export default Dashboard;
