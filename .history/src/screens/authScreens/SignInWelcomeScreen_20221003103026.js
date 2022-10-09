import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import { Icon, Button, SocialIcon } from "react-native-elements";

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style ={{flex:1}}>

            <View style = {{flex:3, justifyContent:'flex-start',alignItems:'center',paddingTop:20}} >
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>주변식당을 </Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>빠르게 찾아 드립니다. </Text>
            </View>

            <View style = {{flex:4, justifyContent:"center" }}>

                <Swiper autoplay= {true}>

                    <View style = {styles.side1}>
                        <Image 
                            source={require('../../img/breakfast.png')}
                            style = {{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style = {styles.side2}>
                        <Image 
                            source={require('../../img/online.png')}
                            style = {{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style = {styles.side3}>
                        <Image 
                            source={require('../../img/deliver.png')}
                            style = {{height:"100%", width:"100%"}}
                        />
                    </View>

                    <View style = {styles.side3}>
                        <Image 
                            source={require('../../img/Chef.png')}
                            style = {{height:"100%", width:"100%"}}
                        />
                    </View>

                </Swiper>

            </View>


            <View style ={{ flex:4, justifyContent:"flex-end",marginBottom:20 }}>

                <View style= {{marginHorizontal:20, marginTop:20}}>
                    <Button 
                        title= "로그인은 여기 입니다" buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress= {()=>{
                            navigation.navigate("SignInScreen");
                        }}
                    />
                </View>

                <View style= {{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button 
                        title ="회원 가입은 여기 입니다."
                        buttonStyle= {styles.createButton}
                        titleStyle= {styles.createButtonTitle}
                        onPress = {()=> {navigation.navigate("SignUpScreen")}}
                    />
                </View>

            </View>

        </View>
    )
}; // 앱 시작시 로긴 처리

const styles = StyleSheet.create({
    side1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    side2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    side3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})