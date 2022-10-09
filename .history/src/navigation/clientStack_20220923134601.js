import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';



const ClientSearch = createStackNavigator()

export function clientStack() {
  return (
    <ClientSearch.Navigator>

        <ClientSearch.Screen 
            name= "SearchScreen"
            component= {SearchScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />

    </ClientSearch.Navigator>
  )
}
