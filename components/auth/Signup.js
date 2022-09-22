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

import AntDesign from 'react-native-vector-icons/AntDesign';
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
            placeholderTextColor={'#252525'}
          />
          <TextInput
            style={styles.signupForm}
            type
            placeholder={'email'}
            placeholderTextColor={'#252525'}
            keyboardType={'email-address'}
            spellCheck={false}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <TextInput
            style={styles.signupForm}
            placeholder={'create a password'}
            placeholderTextColor={'#252525'}
          />

          <TouchableOpacity style={styles.signupButton}>
            <AntDesign
              name="adduser"
              style={{
                color: '#fff',
                fontSize: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
              }}
            />
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
    flexDirection: 'row',

    backgroundColor: '#FF3F4F',
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
    backgroundColor: 'lightgrey',
    borderColor: '#ffbe73',
    borderWidth: 1,
    borderRadius: 12.5,
    color: '#ececec',
    fontSize: 10,
    padding: 10,
    margin: 5,
    fontFamily: 'Helvetica',
  },
  view: {
    backgroundColor: '#f87f56',
    height: '100%',
  },
});

export default Signup;
