import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/authScreens/Main'
import Connected from '../screens/authScreens/Connected';
import { useSelector } from 'react-redux';
import { autoLogin } from '../store/actions/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreen from '../screens/itemsScreen/AddScreen';
import ListScreen from '../screens/itemsScreen/ListScreen';
import MapScreen, { mapScreenOptions } from '../screens/Map/MapScreen';

const StackMain = createStackNavigator();
export const MainNavigator = () => {


  return (
    <NavigationContainer>
      <StackMain.Navigator>
        <StackMain.Screen name="Main" component={Main} />
      </StackMain.Navigator>
    </NavigationContainer>
  )
}

const StackConnected = createStackNavigator();

export const ConnectedNavigator = () => {


  return (
    <StackConnected.Navigator>
      <StackConnected.Screen name="connectedScreen" component={Connected} />
      <StackConnected.Screen name="addScreen" component={AddScreen} />
      <StackConnected.Screen name="Map" component={MapScreen} options={mapScreenOptions}/>


    </StackConnected.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
        <Tab.Screen name="Main" component={ConnectedNavigator} />
        <Tab.Screen name="List" component={ListScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({})
