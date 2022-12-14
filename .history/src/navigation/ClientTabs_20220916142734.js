import React from "react";

import {createBottomTabNavigator, } from '@react-navigation/bottom-tabs';

import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";


const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs() {

    return(
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor : colors.buttons
            }}
        >
            <ClientTabs.Screen 
                   name = "HomeScreen"
                   component = {HomeScreen} 
                   options = {
                        {
                            headerShown: false,
                            tabBarLabel: "홈",
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




            <ClientTabs.Screen 
                   name = "SearchScreen"
                   component = {SearchScreen} 
                   options = {
                        {
                            headerShown: false,
                            tabBarLabel: "Search",
                            tabBarIcon : ({color,size}) => (
                                <Icon 
                                    name= 'search'
                                    type= 'material'
                                    color= {color}
                                    size = {size}
                                />
                            )
                        }
                   }
            />


            <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={MyOrdersScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />

        </ClientTabs.Navigator>
    )
} //*주의 사항 (헤더 나온경우 headerShown: false 값 집어 넣기)

