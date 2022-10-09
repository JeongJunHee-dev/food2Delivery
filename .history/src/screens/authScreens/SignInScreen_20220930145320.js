import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import { Formik } from 'formik'; 
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

export default function SignInScreen({navigation}){

    const[textInput2Focused, setTextInput2Focused] = useState(false);//훅설정 *애니매이션 작동으로 유즈스테이트 폴스로 미리 설정(고정)
    const textInput1 = useRef(1);//레퍼런스에서 아이디 부분 설정
    const textInput2 = useRef(2);//레퍼런스에서 비번 부분 설정

    async function signIn(data){

        try{
            const {password,email} = data
            const user = await auth().signInWithEmailAndPassword(email,password)
            if(user){
                console.log("USER SIGN-IN");
            }
        }
        catch(error){
            Alert.alert()
                error.name,
                error.message
        }

    }


    return(
        <View style= {styles.container}>


            <Header title=  "나의 계정" type= "arrow-left" navigation ={navigation}/>

            <View style={{marginLeft:20, marginTop:10}}>
                <Text style={title}>회원 가입</Text>
            </View>

            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={styles.text1}>회원 가입을 위해 이메일과 암호를 작성하세요.</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>

            <Formik 

                initialValues= {{email:'', password:''}}
                onSubmit = {(values)=>{
                        signIn(values)

                }}

            >
                { (props) =>
                <View>

                    <View style ={{marginTop:20}}>
                        <View>
                            <TextInput 
                                style = {styles.TextInput1} placeholder ="Email" 
                                ref = {textInput1}
                                onChangeText = {props.handleChange('email')}
                                value = {props.values.email}
                            />
                        </View>

                        <View style= {styles.TextInput2}>
                            <Animatable.View animation= {textInput2Focused?"":"fadeInLeft"} duration={400}>
                                <Icon name = "lock" iconStyle={{color:colors.grey3}}
                                    type= "material"
                                    style= {{}}
                                />
                            </Animatable.View>

                            <TextInput 
                                style= {{width:"80%"}} placeholder ="Password"
                                ref = {textInput2} 
                                onFocus = {()=>{
                                    setTextInput2Focused(false);
                                }}
                                onBlur ={()=>{
                                    setTextInput2Focused(true);
                                }}
                                onChangeText = {props.handleChange('password')}
                                value = {props.values.password}
                            />

                            <Animatable.View animation= {textInput2Focused?"":"fadeInLeft"} duration={400}>
                                <Icon name = "visibility-off" iconStyle={{color:colors.grey3}}
                                        type="material"
                                        style= {{marginRight:10}}
                                />
                            </Animatable.View>
                        </View>
                    </View>

                    <View style= {{marginHorizontal:20, marginTop:20}}>
                        <Button 
                            title= "로그인" buttonStyle = {parameters.styledButton}
                            titleStyle = {parameters.buttonTitle}
                            onPress= {props.handleSubmit}
                        />
                    </View>

                </View>
                }
            </Formik>

            

            <View style={{alignItems: "center", marginTop:15}}>
                <Text style={{...styles.text1, textDecorationLine:"underline"}}>비밀번호를 잊으셨나요?</Text>
            </View>

            <View style={{alignItems: "center", marginTop:15, marginBottom:10}}>
                <Text style={{fontsize:20, fontWeight:"bold"}}>OR</Text>
            </View>

            <View style= {{marginHorizontal:10, marginTop:10}}>
                <SocialIcon 
                    title= "Sign In with Facebook"
                    button
                    type= "facebook"
                    style= {styles.SocialIcon} onPress= {()=>{}}
                />
            </View>

            <View style= {{marginHorizontal:10, marginTop:10}}>
                <SocialIcon 
                    title= "Sign In with Google"
                    button
                    type= "google"
                    style= {styles.SocialIcon} onPress= {()=>{}}
                />
            </View>

            <View style={{ marginTop:20, marginLeft:20 }}>
                <Text style={{...styles.text1, }}>회원가입이 필요 하신가요?</Text>
            </View>

            <View style= {{alignItems: "flex-end", marginHorizontal: 20}}>
                <Button 
                    title ="회원 가입은 여기 입니다."
                    buttonStyle= {styles.createButton}
                    titleStyle= {styles.createButtonTitle}
                />
            </View>

        </View>
    )
};// 회원 가입창 

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text1: {
        color: colors.grey3,
        fontSize: 16,
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50,
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

});