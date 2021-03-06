import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: MainScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const TabScreens = createBottomTabNavigator({
    Tab: RootStack
})

export default TabScreens;
