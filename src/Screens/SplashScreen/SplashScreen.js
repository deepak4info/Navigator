import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },2000)
    },[])
  return (
    <View style={{flex:1, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30,}}>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})