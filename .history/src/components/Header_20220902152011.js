import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from "../global/styles";
import { Icon } from "react-native-elements";

export default function Header({title,type,navigation}){
    return(
        <View style = {styles.header}>

            <View style= {{marginLeft:20}}>
                <Icon 
                    type= "material-community"
                    name= {type}
                    color= {colors.headerText}
                    size= {30}
                    onPress= {()=>{navigation.goBack}}
                />
            </View>

            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>

        </View>
    )
};//헤더 부분에서 정의 내린후에 앱.js 보낼 함수정의

const styles = StyleSheet.create({
    header :{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText :{
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30,
    }

});//css