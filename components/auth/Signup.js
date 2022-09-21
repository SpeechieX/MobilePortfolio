import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {requestLogin, userSuccess} from '../../redux/actions/userActions';

const Signup = ({navigation}, props) => {
  const dispatch = useDispatch();
  let currentScreen = useSelector(state => state);

  const handleSwitch = () => {
    dispatch(requestLogin(1));
    console.log(currentScreen);
  };

  const handleSignup = () => {
    dispatch(userSuccess());
    console.log(currentScreen);
  };
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: '50%',
            marginLeft: 10,
            textAlign: 'left',
          }}>
          <TextInput
            style={styles.signupForm}
            placeholder={'username'}
            placeholderTextColor={'#ffffff70'}
          />
          <TextInput
            style={styles.signupForm}
            type
            placeholder={'email'}
            placeholderTextColor={'#ffffff70'}
            keyboardType={'email-address'}
            spellCheck={false}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TextInput
            style={styles.signupForm}
            placeholder={'create a password'}
            placeholderTextColor={'#ffffff70'}
          />

          <TouchableOpacity style={styles.signupButton}>
            <Button
              title={'Sign Up'}
              onPress={handleSignup}
              color={'white'}
              style={{
                fontSize: 20,
                fontFamily: 'Courier',
                textAlign: 'left',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.alreadyMember} onPress={handleSwitch}>
            Already a member? Login.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alreadyMember: {
    color: '#ececec',
    fontFamily: 'Helvetica',
  },
  signupButton: {
    backgroundColor: 'chocolate',
    borderRadius: 12.5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 20,
  },
  signupForm: {
    width: 200,
    height: 44,
    backgroundColor: '#8c8785',
    borderColor: '#8c8785',
    borderWidth: 1,
    borderRadius: 12.5,
    color: '#ececec',
    fontSize: 10,
    padding: 10,
    margin: 5,
    fontFamily: 'Helvetica',
  },
  view: {
    backgroundColor: '#535353',
  },
});

export default Signup;
