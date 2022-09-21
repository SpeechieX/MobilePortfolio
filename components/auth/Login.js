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

import {requestSignup} from '../../redux/actions/userActions';

const Login = ({navigation}, props) => {
  const dispatch = useDispatch();

  let currentScreen = useSelector(state => state);

  const handleSwitch = () => {
    dispatch(requestSignup());
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
          <TextInput style={styles.loginForm} />
          <TextInput style={styles.loginForm} />

          <TouchableOpacity style={styles.loginButton}>
            <Button
              title={'Login'}
              color={'white'}
              style={{
                fontSize: 20,
                fontFamily: 'Helevetica',
                textAlign: 'left',
              }}
            />
          </TouchableOpacity>
          <Text
            onPress={() => {
              handleSwitch();
            }}>
            Click here to Create an account.
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
  loginButton: {
    backgroundColor: 'chocolate',
    borderRadius: 12.5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 20,
  },
  loginForm: {
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

export default Login;
