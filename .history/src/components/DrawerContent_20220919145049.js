import React, {useState,useContext,useEffect} from 'react';

import { View, Text, Linking,
        Pressable, Alert, Switch, StyleSheet } from 'react-native';

import { DrawerContentScrollView, DrawerItemList,
         DrawerItem, } from '@react-navigation/drawer';

import { Avatar, Button, Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function DrawerContent(props) {
    
    return(
        <View style ={styles.container}>

            <DrawerContentScrollView {...props}>

                <View style = {{flexDirection:'row', alignItems:'center', 
                                backgroundColor:colors.buttons, paddingLeft:20, paddingVertical:10}}
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

                    <View style = {{flexDirection:'row', marginTop:10}}>
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

                <DrawerItemList {...props} />

            </DrawerContentScrollView>

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
        
    }
})