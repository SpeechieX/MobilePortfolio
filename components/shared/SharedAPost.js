import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import UserAvatar from './UserAvatar';

const screenWidth = Dimensions.get('window').width;

const SharedAPost = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.notificationRow}>
        <UserAvatar />
        <Text style={styles.alertHeader}>arica123 shared a post</Text>
      </View>
      <Image
        style={styles.content}
        source={{uri: '../../assets/images/image_01_test.jpg'}}
      />
    </TouchableOpacity>
  );
};

export default SharedAPost;

const styles = StyleSheet.create({
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  alertHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    // borderWidth: 1,
  },
  content: {
    // borderWidth: 1,
    height: 200,
    width: screenWidth * 0.9,
    marginTop: 10,
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
