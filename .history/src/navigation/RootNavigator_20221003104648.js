import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { AuthStack } from "./authStack";

export default function RootNavigator(){
    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}// 스택 메모리 할당 부분에 분배역할