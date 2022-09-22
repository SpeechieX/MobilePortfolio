import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';
import Metrics from './Metrics';
import ProfilePhoto from './ProfilePhoto';
import FollowButton from './FollowButton';

import {useDispatch} from 'react-redux';

import {requestSignout} from '../../redux/actions/userActions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(requestSignout(0));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Metrics />
        <ProfilePhoto />
      </View>
      <FollowButton />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    height: 120,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  logoutButton: {
    height: 35,
    width: 200,
    backgroundColor: 'transparent',
    borderColor: '#252525',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    borderRadius: 12.5,

    marginBottom: 10,
    marginTop: 10,
  },
});

export default UserProfile;
