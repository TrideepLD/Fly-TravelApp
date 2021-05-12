import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TermsAndConditionScreen from '../screens/TermsAndConditionScreen';


import TabNavigator from './TabNavigator';

// https://reactnavigation.org/docs/stack-navigator/ is a good doc to get started(left for future references)
const AppStack =  createStackNavigator();


/**
 * 
 * Screens: WelcomeScreen, LoginScreen, RegisterScreen, TermsandConditions Screen, Home Profile Screen
 */
const AuthNavigator = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}}/>
        <AppStack.Screen name="Register" component={RegisterScreen}/>
        <AppStack.Screen name="TermsAndCondition" component={TermsAndConditionScreen} options={{title: 'Terms and Conditions', alignSelf: 'center'}}/>
        <AppStack.Screen name="Home" component={TabNavigator} options={{headerShown:false}}/>
    </AppStack.Navigator>
)

export default AuthNavigator;