import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function HomeHeader(){

    const BadgeIcon = withBadge(10(Icon);

    return(
        <View style= {styles.header}>

            <View style ={{alignItems:"center", justifyContent:'center', marginLeft:15}}>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color= {colors.cardbackground}
                    size = {32}
                />
            </View>

            <View style = {{alignItems: "center", justifyContent: "center"}}>
                <Text style= {{color: colors.cardbackground, fontSize: 25, fontWeight: "bold"}}>People of Delivery</Text>
            </View>

            <View style = {{alignItems: "center", justifyContent: "center",  marginRight:20}}>
                <BadgeIcon 
                    type ="material-community"
                    name ="cart"
                    size = {35}
                    color = {colors.cardbackground}
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
        justifyContent: 'space-between',
    }
});