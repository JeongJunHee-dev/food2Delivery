import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from "../global/styles";
import { Icon } from "react-native-elements";

export default function Header(){
    return(
        <View style = {styles.header}>
            <View>
                <Icon 
                    type= "material-community"
                    name= "arrow-left"
                    color= {colors.white}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header :{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,

    }
});