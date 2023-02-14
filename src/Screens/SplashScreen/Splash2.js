import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash2 = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        },2000)
    },[])
  return (
    <View>
      <Text>Splash2</Text>
    </View>
  )
}

export default Splash2

const styles = StyleSheet.create({})