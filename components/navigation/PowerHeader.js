import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const PowerHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text>PowerHeader</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'darkgrey',
  },
});

export default PowerHeader;
