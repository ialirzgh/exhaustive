// ./navigation/TabNavigator.js

import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SocialAppStackNavigator, BankingAppStackNavigator} from './index';
import * as CONSTS from './../Constants/PageRoutes';
import SocialApp from '../Screens/SocialApp';
import BankingApp from '../Screens/bankingApp';
import {Colors} from '../Theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Map from '../Screens/map';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabNames = ['Banking', 'Socialapp', 'Map'];
  return (
    <Tab.Navigator
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#3e2465">
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name={tabNames[0]}
        component={BankingAppStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        name={tabNames[1]}
        component={SocialAppStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'map',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
        }}
        name={tabNames[2]}
        component={Map}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
