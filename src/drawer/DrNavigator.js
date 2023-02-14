import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrMain from './DrMain';
import About from './About';



const Drawer= createDrawerNavigator();

const DrNavigator = () => {
  return (
<Drawer.Navigator>
    <Drawer.Screen name='DrMain' component={DrMain}
   options={{headerShown:false}}
    />
    <Drawer.Screen name='About' component={About} 
    options={{headerShown:false}}
    />
</Drawer.Navigator>   
  )
}

export default DrNavigator

const styles = StyleSheet.create({})