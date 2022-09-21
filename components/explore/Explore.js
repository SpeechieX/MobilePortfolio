import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SearchPanel from './SearchPanel';
import SuggestedPost from './SuggestedPost';
import React from 'react';

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
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default Explore;
