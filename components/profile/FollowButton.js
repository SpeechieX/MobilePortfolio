import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function FollowButton() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonOutline}>
        <Text style={styles.followText}>Follow @kamuntha!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutline: {
    borderWidth: 1,
    width: '90%',
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  followText: {
    textAlign: 'center',
  },
});
