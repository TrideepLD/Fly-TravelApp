import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import MyTravelScreen from '../screens/MyTravelScreen';
import InformationScreen from '../screens/InformationScreen';

import AppColor from '../config/AppColor';
import AppIcon from '../components/AppIcon';





// Reference material here: https://reactnavigation.org/docs/bottom-tab-navigator/
const AppTab = createBottomTabNavigator();

// Navigates to the HomeScreen with the profile picture, 
// the Wishlist screen or homeScreen through the home navigator 
// and the Information Screen or Location Screen
const TabNavigator = () => (
    <AppTab.Navigator 
        tabBarOptions={{
            activeTintColor:AppColor.delete,
            activeBackgroundColor: AppColor.darkgrey,
            inactiveTintColor:AppColor.grey,
            inactiveBackgroundColor: AppColor.windowBackground,
        }}    
    >
        <AppTab.Screen 
        name="Home" 
        component={HomeNavigator} 
        options={{
            tabBarIcon: () => <AppIcon 
                size={25} 
                name="home" 
                backgroundColor={AppColor.white}/>
            }
        }/>
        <AppTab.Screen 
            name="Wishlist" 
            component={MyTravelScreen}
            options={{
                tabBarIcon: () => <AppIcon 
                    size={25} 
                    name="airplane" 
                    backgroundColor={AppColor.white}/>
                }}
        />
        <AppTab.Screen 
            name="Locations" 
            component={InformationScreen}
            options={{
                tabBarIcon: () => <AppIcon 
                    size={25} 
                    name="map-marker" 
                    backgroundColor={AppColor.white}/>
                }}
        />
    </AppTab.Navigator>
)

export default TabNavigator
