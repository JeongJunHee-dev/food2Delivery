import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function HomeHeader(){
    return(
        <View style= {styles.header}>

            <View style ={{alignItems:"center", justifyContent:'center', marginLeft:15}}>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color= {colors.cardbackground}
                />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    }
});