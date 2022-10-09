import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function HomeScreen(){
    return(
        <View style= {styles.container}>
            <Text>Hello 홈스크</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})