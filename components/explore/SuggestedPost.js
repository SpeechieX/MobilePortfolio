import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SuggestedPost = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Suggested</Text>
    </View>
  );
};

export default SuggestedPost;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '80%',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});
