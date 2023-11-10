import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style = {{alignItems: 'center'}}>
      <Image 
      styles = {{height :500, width: 500}}
      source = {require("../../assets/todoImg.png")} />
    
      <Text>Please Add New Task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({})