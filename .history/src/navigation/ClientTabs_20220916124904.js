import React from "react";

import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs';

import {Icon} from 'react-native-elements';


const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs() {

    return(
        <ClientTabs.Navigator>
            <ClientTabs.Screen />
        </ClientTabs.Navigator>
    )
}