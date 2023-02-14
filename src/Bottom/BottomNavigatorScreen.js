import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomScreen1 from './BottomScreen1';
import BottomScreen2 from './BottomScreen2';
import BottomScreen3 from './BottomScreen3';

const Bottom= createBottomTabNavigator();

const BottomNavigatorScreen = () => {
  return (
    <Bottom.Navigator >
      <Bottom.Screen 
      name='BottomScreen1' component={BottomScreen1}
      options={{headerShown:false,
      tabBarIcon:()=>{
        return (
          <Image source={require('../Assets/Images/home.png')}
          style={{width:18,height:27}}/>
        );
      },
      }}
      />
         <Bottom.Screen 
      name='BottomScreen2' component={BottomScreen2}
      options={{headerShown:false,
        tabBarIcon:()=>{
          return (
            <Image source={require('../Assets/Images/home.png')}
            style={{width:18,height:27}}/>
          );
        },
        }}
        />
         <Bottom.Screen 
      name='BottomScreen3' component={BottomScreen3}
      options={{headerShown:false,
        tabBarIcon:tabInfo=>{
          return (
            <Image source={require('../Assets/Images/home.png')}
            style={{width:18,height:27, tintColor:tabInfo.focused?'purple':'black'}}/>
          );
        },
        }}
        />

    </Bottom.Navigator>
  )
}

export default BottomNavigatorScreen

const styles = StyleSheet.create({})