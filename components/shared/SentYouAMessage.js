import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import UserAvatar from './UserAvatar';

const SentYouAMessage = () => {
  return (
    <TouchableOpacity style={styles.notificationRow}>
      <UserAvatar />
      <Text style={styles.alertHeader}>arica123 sent you a message</Text>
    </TouchableOpacity>
  );
};

export default SentYouAMessage;

const styles = StyleSheet.create({
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  alertHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    // borderWidth: 1,
  },
});
