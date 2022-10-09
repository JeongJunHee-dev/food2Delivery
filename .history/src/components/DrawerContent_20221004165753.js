import React, {useState,useContext,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, Linking,
        Pressable, Alert, Switch,
        StyleSheet, TouchableOpacity } from 'react-native';

import { DrawerContentScrollView, DrawerItemList,
         DrawerItem, } from '@react-navigation/drawer';

import { Avatar, Button, Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function DrawerContent(props) {

    async function signOut(){

        auth()
        .signOut()
        .then(
            ()=> {
                console.log("성공적으로 로그아웃이 되었습니다")
            }
        )

        try{

        }catch(error){
            Alert.alert(err.code)
        }
    }

    
    return(
        <View style ={styles.container}>

            <DrawerContentScrollView {...props}>

                <View style ={{backgroundColor:colors.buttons,}}>

                    <View style = {{flexDirection:'row', alignItems:'center', 
                                     paddingLeft:20, paddingVertical:10}}
                    >
                        <Avatar 
                            rounded
                            avatarStyle={styles.avatar}
                            size = {75}
                            source = {{uri:"https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001179]_20210421164934656.jpg"}}
                        />
                        
                        <View style ={{marginLeft:10}}>
                            <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>정 준희</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}} >deachan398@gmail.com</Text>
                        </View>

                    </View>

                    <View style = {{flexDirection:'row', justifyContent:'space-evenly', paddingBottom:5}}>

                        <View style = {{flexDirection:'row', marginTop:10,}}>
                                <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}>
                                    <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>1</Text>
                                    <Text style ={{color:colors.cardbackground,fontSize:14}} >즐겨찾는 음식</Text>
                                </View>
                            </View>

                        <View style = {{flexDirection:'row', marginTop:10}}>
                            <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}>
                                <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>0</Text>
                                <Text style ={{color:colors.cardbackground,fontSize:14}} >내 주문카트</Text>
                            </View>
                        </View>

                    </View>

                </View>

                

                <DrawerItemList {...props} />

                <DrawerItem 
                    label= "결재 정보"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "credit-card-outline"
                            color= {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem 
                    label= "할인 정보"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "tag-heart"
                            color= {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem 
                    label= "세팅 옵숀"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color= {color}
                            size = {size}
                        />
                    )}
                />

                <DrawerItem 
                    label = "도움말"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "lifebuoy"
                            color ={color}
                            size ={size}
                        />
                    )}
                />


                <View style ={{borderTopWidth:1, borderTopColor:colors.grey5}}>
                        <Text style= {styles.preferences}>환경 설정</Text>

                        <View style = {styles.switchText}>
                            <Text style = {styles.darkthemeText}>다크모드</Text>
                            <View style = {{paddingRight:10}}>
                                <Switch 
                                    trackColor = {{false: "#767577",true : "#81b0ff"}} 
                                    thumbColor =  "#f4f3f4"
                                />
                            </View>
                        </View>

                </View>

            </DrawerContentScrollView>

            <TouchableOpacity onPress={()=>{signOut()}}>

                <DrawerItem 
                        label = "로그 아웃"
                        icon = {({color,size})=>(
                            <Icon 
                                type ="material-community"
                                name = "logout-variant"
                                color ={color}
                                size ={size}
                            />
                        )}
                    />

            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    avatar: {
        borderWidth:4,
        orderColor:colors.pagebackground,
        
    },
    preferences: {
        fontSize: 16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20,
    },
    switchText: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize: 16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }
})