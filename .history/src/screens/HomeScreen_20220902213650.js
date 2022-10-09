import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";



export default function HomeScreen(){
    return(
        <View style= {styles.container}>
           <HomeHeader />
           
        </View>
    )
};// 홈 화면 구성단

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    }
});