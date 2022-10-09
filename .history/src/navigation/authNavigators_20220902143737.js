import React from "react";
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";

const AuthStack = createStackNavigator();


export default function AuthStack(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
                name= "SignInWelcomeScreen"
                component= {SignInWelcomeScreen}
            />
        </AuthStack.Navigator>

        
    )
}; 