import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {colors, parameters,} from '../global/styles'


export default function HomeScreen(){

    const [delivery, setDelivery] = useState(true); //훅 설정

    return(
        <View style= {styles.container}>
           <HomeHeader />
           
           <View>
                <TouchableOpacity>
                    <View style={{backgroundColor: delivery?colors.b}}>

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