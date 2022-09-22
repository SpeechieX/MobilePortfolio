import {StyleSheet, ScrollView, Text, View} from 'react-native';
import React from 'react';

const SuggestedPost = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={{textAlign: 'center'}}>Suggested</Text> */}
        {/* ComponentTypeOne */}
        {/* ComponentTypeTwo */}
        {/* ComponentTypeThree */}
      </ScrollView>
    </View>
  );
};

export default SuggestedPost;

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
});
