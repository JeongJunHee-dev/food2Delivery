import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import RestaurantMapScreen from "../screens/RestaurantsMapScreen";
import DrawerNavigitor from "./DrawerNavigator";


const App = createStackNavigator();


export function AppStack(){

    return(
        <App.Navigator>

            <App.Screen
                name= "DrawerNavigator"
                component= {DrawerNavigitor}
                options= {{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
            />

            <App.Screen
                name= "RestaurantMapScreen"
                component= {RestaurantMapScreen}
                options= {{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
            />
            
        </App.Navigator>
    )
}