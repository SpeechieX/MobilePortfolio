import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Status = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.statusForm}
        placeholder={'Share your thoughts...'}
      />
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    width: 'auto',
  },
  statusForm: {
    width: 200,
    height: 40,
    backgroundColor: 'lightgrey',
    color: 'black',
    borderRadius: 12.5,
    padding: 10,
  },
  postButton: {
    width: 60,
    height: 40,
    borderRadius: 12.5,
    borderColor: 'black',
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  postButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default Status;
