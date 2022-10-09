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
                options= {{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
            />

            <AuthStack.Screen
                name= "SignInScreen"
                component= {SignInWelcomeScreen}
                options= {{
                            headerShown: false,
                            ...TransitionPresets.RevealFromBottomAndroid
                        }}
            />
        </AuthStack.Navigator>

        
    )
}; 