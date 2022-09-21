import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

// Custom TextInput with Search Icon
// Custom Validation
// Keyword Grabber

const SearchPanel = () => {
  return (
    <View>
      <TextInput
        style={styles.searchForm}
        placeholder={'Search Anything...'}
        placeholderTextColor={'#fff'}
        selectionColor={'limegreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchForm: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 3,
    textShadowColor: 'white',
    textShadowRadius: 2,
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: 20,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
    fontFamily: 'courier',
  },
});

export default SearchPanel;
