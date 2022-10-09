import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';



const ClientSearch = createStackNavigator()

export default function clientStack() {
  return (
    <ClientSearch.Navigator>

        <ClientSearch.Screen 
            name= ""
            component= {Home}
        />

    </ClientSearch.Navigator>
  )
}

const styles = StyleSheet.create({})