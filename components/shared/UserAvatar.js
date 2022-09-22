import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserAvatar = () => {
  return <View style={styles.outline} />;
};

export default UserAvatar;

const styles = StyleSheet.create({
  outline: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#FF3F9F' || '#0ffccd',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
});
