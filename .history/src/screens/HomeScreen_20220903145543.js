import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";



export default function HomeScreen(){
    return(
        <View style= {styles.container}>
           <HomeHeader />
           
           <View>
                <TouchableOpacity>
                    <View style={{backgroundColor: }}>

                    </View>
                </TouchableOpacity>
           </View>

        </View>
    )
};// 홈 화면 구성단

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    }
});