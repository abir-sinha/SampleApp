import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const MyChatScreen = ({ navigation }) => (
  <View>
    <Text>I'm here</Text>
  </View>
)
const ChatScreen = StackNavigator({
  Home: { screen: MyChatScreen }
});

export default ChatScreen;