import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

const ProfilePhoto = () => {
  return <View style={styles.outline} />;
};

const styles = StyleSheet.create({
  outline: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: 'blue',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
});

export default ProfilePhoto;
