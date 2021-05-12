import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

import MyTravelScreen from '../screens/MyTravelScreen';
import HomeScreen from '../screens/HomeScreen';
import InformationScreen from '../screens/InformationScreen';

// https://reactnavigation.org/docs/stack-navigator/ is a good doc to get started(left for future references)
const AppStack =  createStackNavigator();

// I dont even know why I;m using this tbh. I;m just too scared to break any code i guess.

const HomeNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="MyLocations" component={MyTravelScreen} options={{headerStatusBarHeight:Constants.statusBarHeight}}/>
        <AppStack.Screen name="Info" component={InformationScreen} options={{headerStatusBarHeight:Constants.statusBarHeight}}/>
    </AppStack.Navigator>
)

export default HomeNavigator;