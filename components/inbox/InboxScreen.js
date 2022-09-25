import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import UserAvatar from '../shared/UserAvatar';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// An inbox is an array of conversations, that hold many messages.
// Conversations are seen in table like flat lists from top to bottom.
// Conversations show a preview of the previous message status.

// The InboxScreen Component is a Stack Navigator that has the Inbox and Conversation views within reach

const screenWidth = Dimensions.get('window').width;

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
  {id: 1, from: 'sender', content: 'lololol'},
  {id: 2, from: 'user', content: 'lololol'},
  {id: 3, from: 'sender', content: '555555'},
  {id: 4, from: 'sender', content: 'haha yeah'},
];

const MessageView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {conversation.map(chat => (
          <View style={styles.messageBlurbBody}>
            <Text style={styles.messageBlurb}>{chat.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Messages = ({navigation}) => {
  return chats.map(chat => (
    <TouchableOpacity
      style={styles.messageTouchable}
      key={chat.id}
      onPress={() => navigation.navigate('MessageView')}>
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
        component={Inbox}
        // options={{headerTitle: props => <LogoTitle {...props} />}}
        options={{headerTitle: '', headerShown: false}}
      />
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
});
