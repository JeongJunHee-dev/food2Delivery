import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';



const Client = createStackNavigator()

export default function clientStack() {
  return (
    <View>
      <Text>clientStack</Text>
    </View>
  )
}

const styles = StyleSheet.create({})