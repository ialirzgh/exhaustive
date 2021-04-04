// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
const Stack = createStackNavigator();
import * as CONSTS from './../Constants/PageRoutes';
import SocialApp from '../Screens/SocialApp';
import SocialPOstPage from './../Screens/SocialApp/postPage';

const SocialAppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CONSTS.SocialApp} component={SocialApp} />
      <Stack.Screen
        name={CONSTS.SocialAppPostPage}
        component={SocialPOstPage}
      />
    </Stack.Navigator>
  );
};

const BankingAppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export {SocialAppStackNavigator, BankingAppStackNavigator};

const Contact = () => {
  return <Text>Contact</Text>;
};
