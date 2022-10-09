import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from "../components/Header";




export default function HomeScreen(){
    return(
        <View style= {styles.container}>
            <Header />
           
        </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        
    }
})