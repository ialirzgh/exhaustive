// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
const Stack = createStackNavigator();
import * as CONSTS from './../Constants/PageRoutes';
import SocialApp from '../Screens/SocialApp';
import SocialPOstPage from './../Screens/SocialApp/postPage';
import BankingApp from '../Screens/bankingApp';
import BankingPostPage from '../Screens/bankingApp/bankingpostpage';

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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CONSTS.BankingApp} component={BankingApp} />
      <Stack.Screen
        name={CONSTS.BankingAppPostPage}
        component={BankingPostPage}
      />
    </Stack.Navigator>
  );
};

export {SocialAppStackNavigator, BankingAppStackNavigator};
