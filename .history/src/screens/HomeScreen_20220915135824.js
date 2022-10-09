import React, {useState} from "react";
import {View, Text, StyleSheet, 
        TouchableOpacity, ScrollView, 
        FlatList, Pressable, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {colors, parameters,} from '../global/styles';
import {filterData, restauratsData} from '../global/Data';
import FoodCard from "../components/FoodCard";



const SCREEN_WIDTH = Dimensions.get('window').width

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
                        horizontal = {true}
                        showsHorizontalScrollIndicator = {false}
                        data = {filterData}
                        keyExtractor = {(item)=>item.id}
                        extraData = {indexCheck}
                        renderItem = {({item, index})=>(
                            <Pressable
                                onPress = {()=>{setIndexCheck(item.id)}}
                            >
                                <View style = {indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                   <Image 
                                        style = {{height:60, width:60, borderRadius:30}}
                                        source = {item.image}
                                   /> 

                                   <View>
                                        <Text style= {indexCheck === item.id ? {...styles.smallCardTextSected} : {...styles.smallCardText}}>
                                            {item.name}
                                        </Text>
                                   </View>
                                </View>
                            </Pressable>
                        )}

                    />
                </View>

                <View style= {styles.headerTextView}>
                    <Text style={styles.headerText}>무료배달 가능 한 곳</Text>
                </View>

                <View>
                <FlatList 
                    style ={{marginTop:10, marginBottom:10}} 
                    horizontal ={true}
                    data = {restauratsData}
                    keyExtractor = {(item,index)=>index.toString()}   
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <FoodCard 
                           screenWidth ={SCREEN_WIDTH*0.8}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.bussinessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                   </View>
                        )}
                    />
                </View>

                <View style= {styles.headerTextView}>
                    <Text style={styles.headerText}>현재 프로모션 중</Text>
                </View>

                <View>
                <FlatList 
                    style ={{marginTop:10, marginBottom:10}} 
                    horizontal ={true}
                    data = {restauratsData}
                    keyExtractor = {(item,index)=>index.toString()}   
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <FoodCard 
                           screenWidth ={SCREEN_WIDTH*0.8}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.bussinessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                   </View>
                        )}
                    />
                </View>

                <View style= {styles.headerTextView}>
                    <Text style={styles.headerText}>근처 주문 가능</Text>
                </View>

                <View style = {{width:SCREEN_WIDTH,paddingTop:10}}>
                    {
                        restauratsData.map(item => (
                            <View key = {item.key}>

                            </View>
                        ))
                    }
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
       backgroundColor: colors.grey5,
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
    },
    smallCardTextSected: {
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,
    },
});