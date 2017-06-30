import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './views/ChatScreen';
import HomeScreen from './views/HomeScreen';


const SampleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen } 
});

export default () => <SampleApp />;