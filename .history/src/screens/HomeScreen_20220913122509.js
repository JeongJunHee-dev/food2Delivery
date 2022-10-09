import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {colors, parameters,} from '../global/styles';
import {filterData} from '../global/Data';


export default function HomeScreen(){

    const [delivery, setDelivery] = useState(true); //훅 설정
    const [indexCheck, setIndexCheck] = useState("0");// 데이터 정렬순 훅 설정

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

                    <View style={styles.addressView}>
                        
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

                <View style= {styles.headerTextView}>
                    <Text style={styles.headerText}>종류별</Text>
                </View>

                <View>
                    <FlatList 

                        data = {filterData}
                        keyExtractor = {(item)=>item.id}
                        extraData = {indexCheck}
                        renderItem = {({item, index})=>(
                            <Pressable>
                                <View style = {}>

                                </View>
                            </Pressable>
                        )}

                    />
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
        justifyContent: "space-evenly", 
        marginHorizontal:10, 
        marginVertical:10                        
    },
    clockView: {
        flexDirection: "row", 
        alignItems:"center", 
        marginLeft:20, 
        backgroundColor:colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },
    addressView: {
        flexDirection:"row", 
        backgroundColor:colors.grey5,
        borderRadius:15, 
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey2,
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
    },
    smallCard: {
       borderRadius: 30,
       backgroundColor: colors.buttons,
       justifyContent: "center",
       alignItems: 'center',
       padding: 5,
       width: 80,
       margin: 10,
       height: 100,
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    }
});