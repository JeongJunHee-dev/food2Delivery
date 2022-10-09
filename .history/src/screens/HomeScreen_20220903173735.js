import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {colors, parameters,} from '../global/styles'


export default function HomeScreen(){

    const [delivery, setDelivery] = useState(true); //훅 설정

    return(
        <View style= {styles.container}>
           <HomeHeader />

            <ScrollView
                stickyHeaderIndices= {[0]}
                showsVerticalScrollIndicator = {true}
            >

                <View>

                    <View style = {{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>

                            <TouchableOpacity
                                onPress= {()=>{
                                    setDelivery(true)
                                }}
                            >
                                <View style={{...styles.deliveryButton,backgroundColor: delivery?colors.buttons :colors.grey5}}>
                                    <Text style= {styles.deliveryText}>배달</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress= {()=>{
                                    setDelivery(false)
                                }}
                            >
                                <View style={{...styles.deliveryButton,backgroundColor: delivery?colors.grey5 :colors.buttons}}>
                                    <Text style= {styles.deliveryText}>포장 및 수령</Text>
                                </View>
                            </TouchableOpacity>

                    </View>

                </View>

                <View>
                    <View style ={{flexDirection:"row"}}>
                        <Icon 
                            type= "material-community"
                            name= "map-maker"
                            color={colors.grey1}
                            size= {26}
                        /> 

                        <Text style = {{marginLeft:5}}>경남 양산시 북안남 1길 45 </Text> 
                    </View>

                    <View style ={{flexDirection:"row"}}>
                        <Icon 
                            type= "material-community"
                            name= "colck-time-four"
                            color={colors.grey1}
                            size= {26}
                        /> 

                        <Text style = {{marginLeft:5}}>경남 양산시 북안남 1길 45 </Text> 
                    </View>

                </View>

            </ScrollView>   

        </View>
    );
};// 홈 화면 구성단

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical:5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    }
});