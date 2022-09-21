import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Pager = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pager</Text>
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

export default Pager;
