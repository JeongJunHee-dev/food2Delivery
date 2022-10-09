import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function HomeHeader(){
    return(
        <View style= {styles.header}>

            <View style= {{alignItems:"center", justifyContent: "center", marginLeft:15}}>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    header: {
        flex: 'row',
        backgroundColor: colors.buttons,
        height:parameters.headerHeight,
    }
});
