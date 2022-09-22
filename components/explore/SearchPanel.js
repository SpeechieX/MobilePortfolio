import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

// Custom TextInput with Search Icon
// Custom Validation
// Keyword Grabber
const width = Dimensions.get('window').width;

console.log('width ', width);

const SearchPanel = () => {
  return (
    <View style={styles.searchBar}>
      <AntDesign
        name="search1"
        style={{
          color: '#252525',
          fontSize: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      />
      <TextInput
        style={styles.searchForm}
        placeholder={'Search Anything...'}
        placeholderTextColor={'#252525'}
        selectionColor={'limegreen'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',

    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingLeft: 40,
    width: width * 0.68,
    backgroundColor: 'lightgrey',
    borderRadius: 12.5,

    overflowX: 'none',
  },
  searchForm: {
    height: 40,
    width: width * 0.5,
    borderWidth: 1,
    borderColor: '#ffffff00',

    textShadowColor: 'white',
    textShadowRadius: 1,

    color: '#252525',

    backgroundColor: 'lightgrey',
    padding: 10,

    fontFamily: 'helvetica',
  },
});

export default SearchPanel;
