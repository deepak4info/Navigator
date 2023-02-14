import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/HomeScreen/Home';
import SplashScreen from './Screens/SplashScreen/SplashScreen';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown:false}}
        />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})