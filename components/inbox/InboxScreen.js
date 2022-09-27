import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import React from 'react';

import UserAvatar from '../shared/UserAvatar';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TextInput} from 'react-native-gesture-handler';
import Status from '../dashboard/Status';

const Stack = createNativeStackNavigator();

// An inbox is an array of conversations, that hold many messages.
// Conversations are seen in table like flat lists from top to bottom.
// Conversations show a preview of the previous message status.

// The InboxScreen Component is a Stack Navigator that has the Inbox and Conversation views within reach

const screenWidth = Dimensions.get('window').width;

// Mock Data

const chats = [
  {
    id: 1,
    sender: 'Bob',
    message: 'Cheyanne invited us over for..',
  },
  {
    id: 2,
    sender: 'arica7633',
    message: 'hey I want to see you',
  },
  {
    id: 3,
    sender: 'oldTimerJ',
    message: 'last night was a great time',
  },
];

const conversation = [
  {
    id: 1,
    from: 'sender',
    content:
      'lololokjaksljflkajjfkljjfjaljflkajfkljakjfkdljlafkajflkjaljflkljaljfklajkfjlkajflkajklfjakljfkajflajfklajjljkljfkljaljklajlkfjakjflajkljdfkljdjfajlkjafl',
  },
  {id: 2, from: 'user', content: 'lololol'},
  {id: 3, from: 'sender', content: '555555'},
  {id: 4, from: 'sender', content: 'haha yeah'},
];

// Messaging Components in Descending Order

const Messages = ({navigation}) => {
  return chats.map(chat => (
    <TouchableOpacity
      style={styles.messageTouchable}
      key={chat.id}
      onPress={() => {}}>
      <View style={{marginTop: -10}}>
        <UserAvatar />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.senderPreview}>{chat.sender}</Text>
        <Text style={styles.messagePreview}>{chat.message}</Text>
      </View>
    </TouchableOpacity>
  ));
};

const MessageInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.cameraButton} />
      <TextInput
        style={styles.chatInput}
        cursorColor={'#000'}
        keyboardType={'default'}
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const MessageView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userBanner}>
        <UserAvatar />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding ' : 'height'}>
        <ScrollView style={styles.messageScrollView}>
          {conversation.map(chat => (
            <TouchableOpacity
              style={
                chat.from === 'sender'
                  ? styles.messageBlurbBodyLeft
                  : styles.messageBlurbBodyRight
              }
              onPress={Keyboard.dismiss}>
              <View style={styles.textWrapper}>
                <Text
                  style={
                    chat.from === 'sender'
                      ? styles.messageBlurbLeft
                      : styles.messageBlurbRight
                  }>
                  {chat.content}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <MessageInput />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const Inbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Messages />
      </ScrollView>
    </SafeAreaView>
  );
};

const InboxScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Your Messages"
        // component={Inbox}
        component={MessageView}
        // options={{headerTitle: props => <LogoTitle {...props} />}}
        options={{headerTitle: '', headerShown: false}}
      />

      {/* There seems to be an issue with the drawer navigation  */}
      <Stack.Screen
        name="MessageView"
        component={MessageView}
        // options={{headerTitle: props => <LogoTitle {...props} />}}
        options={{headerTitle: '', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  senderPreview: {
    color: '#ff6f61',
    fontWeight: '800',
    marginLeft: 5,
    marginBottom: 3,
  },
  messagePreview: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 5,
  },
  messageTouchable: {
    flexDirection: 'row',
    height: 90,
    width: screenWidth * 0.99,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#cccccc70',
    padding: 20,
    margin: 0.5,
  },
  messageContent: {
    flexDirection: 'column',
    marginTop: 10,
    marginRight: 10,
  },
  messageBlurbLeft: {
    color: 'purple',
    textAlign: 'left',
  },
  messageBlurbBodyLeft: {
    borderWidth: 1,
    borderTopLeftRadius: 12.5,
    borderTopRightRadius: 12.5,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 12.5,
    borderColor: 'purple',
    backgroundColor: '#cca1bb30',

    padding: 10,
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 3,

    width: 200,
    flexGrow: 1,
    alignSelf: 'flex-start',
  },
  messageBlurbRight: {
    color: 'white',
    textAlign: 'right',
  },
  messageBlurbBodyRight: {
    borderWidth: 1,
    borderTopLeftRadius: 12.5,
    borderTopRightRadius: 12.5,
    borderBottomLeftRadius: 12.5,
    borderBottomRightRadius: 1,
    borderColor: 'orange',
    backgroundColor: '#f14f3190',
    padding: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    width: 200,
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  messageScrollView: {
    width: screenWidth * 0.97,
  },
  textWrapper: {},
  userBanner: {
    height: 70,
    marginBottom: 10,
  },
  cameraButton: {
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 5,
  },
  sendButton: {
    height: 40,
    width: 70,
    borderWidth: 0.3,
    borderRadius: 12.5,
    backgroundColor: 'darkgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 1,
  },
  chatInput: {
    width: 230,
    height: 40,
    fontSize: 18,
    bottom: 0,
    borderWidth: 0.3,
    borderRadius: 12.5,
    paddingLeft: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    justifyContent: 'space-between',
    padding: 5,
  },
});
