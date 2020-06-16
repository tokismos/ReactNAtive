import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main'
import Connected from '../screens/Connected';
import { useSelector } from 'react-redux';
import { autoLogin } from '../store/actions/auth';

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
    <NavigationContainer>
      <StackConnected.Navigator>
          <StackConnected.Screen name="con" component={Connected} />
      </StackConnected.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({})
