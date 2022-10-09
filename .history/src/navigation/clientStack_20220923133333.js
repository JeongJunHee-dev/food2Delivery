import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';



const Client = createStackNavigator()

export default function clientStack() {
  return (
    <Client.Navigator>

        <Client.Screen 
            name= "HomeScreen"
        />

    </Client.Navigator>
  )
}

const styles = StyleSheet.create({})