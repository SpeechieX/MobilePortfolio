import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SearchPanel from './SearchPanel';
import SuggestedPost from './SuggestedPost';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
const Explore = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchPanel />
      <SuggestedPost />
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

export default Explore;
