import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomScreen1 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text
      style={{
        fontSize:30,
      }}
      onPress={()=>{
        navigation.openDrawer();
      }}
      >BottomScreen1</Text>
    </View>
  )
}

export default BottomScreen1

const styles = StyleSheet.create({})