import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>You currently have no notifications</Text>
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

export default Activity;
