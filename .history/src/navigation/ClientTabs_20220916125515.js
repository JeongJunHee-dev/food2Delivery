import React from "react";

import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';
import HomeScreen from "../screens/HomeScreen";



const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs() {

    return(
        <ClientTabs.Navigator>
            <ClientTabs.Screen 
                   name = "HomeScreen"
                   component = {HomeScreen} 
                   options = {
                        {
                            tabBarLabel: "Home",
                            tabBarIcon : ({color,size}) => (
                                <Icon 
                                    name= 'home'
                                    type= 'material'
                                    color= {color}
                                    size = {size}
                                />
                            )
                        }
                   }
            />
        </ClientTabs.Navigator>
    )
}