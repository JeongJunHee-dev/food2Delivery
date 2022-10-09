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

                <View style = {styles.filterView}>

                    <View style={{flexDirection:"row", backgroundColor:colors.grey5
                                    ,borderRadius:15, paddingVertical:3
                                }}
                    >
                        
                        <View style ={{flexDirection: "row",alignItems:"center", paddingLeft:10}}>
                            <Icon 
                                type= "material-community"
                                name= "map-marker"
                                color= {colors.grey1}
                                size= {26}
                            />

                            <Text style ={{marginLeft:5}}>경남 양산시 북안남1길</Text>
                        </View>

                        <View style ={styles.clockView}>
                            <Icon 
                                type= "material-community"
                                name= "clock-time-four"
                                color= {colors.grey1}
                                size= {26}
                            />

                            <Text style ={{marginLeft:5}}>지금 주문</Text>
                        </View>

                    </View>

                    <View>
                        <Icon 
                            type= "material-community"
                            name= "tune"
                            color= {colors.grey1}
                            size= {26}
                        />
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
    },
    filterView: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginHorizontal:10, 
        marginVertical:10                        
    },
    clockView: {
        flexDirection: "row", 
        alignItems:"center", 
        marginLeft:20, 
        backgroundColor:colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5
    },
});