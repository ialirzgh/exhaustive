// ./navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SocialAppStackNavigator, BankingAppStackNavigator} from './index';
import * as CONSTS from './../Constants/PageRoutes';
import SocialApp from '../Screens/SocialApp';
import BankingApp from '../Screens/bankingApp';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={CONSTS.SocialApp} component={SocialAppStackNavigator} />
      <Tab.Screen
        name={CONSTS.BankingApp}
        component={BankingAppStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
