import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

import MyTravelScreen from '../screens/MyTravelScreen';
import InformationScreen from '../screens/InformationScreen';
import TravelScreen from '../screens/TravelScreen';

const AppStack =  createStackNavigator();

const HomeNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Travel" component={TravelScreen} options={{headerStatusBarHeight:Constants.statusBarHeight}}/>
        <AppStack.Screen name="Info" component={InformationScreen} options={{headerStatusBarHeight:Constants.statusBarHeight}}/>
    </AppStack.Navigator>
)

export default HomeNavigator;