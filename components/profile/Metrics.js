import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Metrics = () => {
  return (
    <View style={styles.outline}>
      <Text style={styles.title}>@kanamtha</Text>
      <View style={styles.container}>
        <View style={styles.metric}>
          <Text style={styles.count}>100</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.metric}>
          <Text style={styles.count}>10</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outline: {
    height: 100,
    marginRight: 20,
    marginTop: 10,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  metric: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 80,
  },
  count: {
    fontWeight: '800',
  },
  title: {
    fontWeight: '800',
    textAlign: 'center',
    borderWidth: 5,
  },
  follow: {
    borderWidth: 1,
    backgroundColor: 'blue',
    color: 'white',
  },
});

export default Metrics;
