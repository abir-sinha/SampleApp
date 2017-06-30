import React from 'react';
import {View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

const MyHomeScreen = ({navigation}) => (
    <View>
        <Button onPress ={() => navigation.navigate("Chat")} title="Go to Chat"/>
    </View>
)

const HomeScreen = StackNavigator({
  Home: { screen: MyHomeScreen }
});

export default HomeScreen;