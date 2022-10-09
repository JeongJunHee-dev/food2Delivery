import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { colors } from '../../global/styles';
import Header from "../../components/Header";
import { Formik } from 'formik'; 
import {Icon} from 'react-native-elements';

const initialValues = {phone_number:'', first_name:"", last_name:"", password:"", email:'', username:''}

const SignUpScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>

        <Header title=  "나의 계정" type= "arrow-left" navigation ={navigation}/>

      <ScrollView keyboardShouldPersistTaps = "always">
            <View style= {styles.view1}>
                <Text style={styles.text1}>회원 가입</Text>
            </View>

            <Formik initialValues= {initialValues} onSubmit = {(values)=>{SignUpScreen(values)}}>
                {(props)=>(
                    <View style= {styles.view2}>

                        <View>
                            <Text style ={styles.text2}>처음 사용자 인가요?</Text>
                        </View>
                 
                        <View style={styles.view6}>
                            <TextInput 
                                placeholder= "휴대전화 번호 입력"
                                style = {styles.input1}
                                keyboardType = "phone-pad"
                                autoFocus = {true}
                                onChangeText = {props.handleChange('phone_number')}
                                value = {props.values.phone_number}
                            />
                        </View>

                        <View style={styles.view6}>
                            <TextInput 
                                placeholder= "성"
                                style = {styles.input1}
                                autoFocus = {false}
                                onChangeText = {props.handleChange('first_name')}
                                value = {props.values.first_name}
                            />
                        </View>

                        <View style={styles.view6}>
                            <TextInput 
                                placeholder= "이름"
                                style = {styles.input1}
                                autoFocus = {false}
                                onChangeText = {props.handleChange('last_name')}
                                value = {props.values.last_name}
                            />
                        </View>
                        
                        <View style = {styles.view10}>
                            <View>
                                <Icon 
                                    name= 'name'
                                    style= {styles.email}
                                    color = {colors.grey3}
                                />
                            </View>
                        </View>

                    </View>

                )}
            </Formik>

      </ScrollView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

    container:{flex:1,
        backgroundColor:'white'
      },

    view1:{justifyContent:'center',
            alignItems:'flex-start',
            marginTop:10,
            marginBottom:10,
            paddingHorizontal:15
        },

    text1:{fontSize:22,
    color:colors.buttons,
    fontWeight:'bold'
    },

    view2:{justifyContent:'flex-start',
            backgroundColor:'white',
            paddingHorizontal:15
        },

    view3:{marginTop:5,
        marginBottom:10
        },

    text2:{fontSize:15,
        color:colors.grey2
        },

    view4:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5
        
        },

    view5:{ marginLeft:30,
            marginTop:20      
        },

    input1:{fontSize:16, },

    view6:{flexDirection:'row',
            borderWidth:1,
            borderColor: colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
        },

    view7:   {marginLeft:0,
                maxWidth:"65%",         
            },

    input2:{fontSize:16,
            marginLeft: 0,
            marginBottom:0
                },         

    view8:{flexDirection:'row',
        borderWidth:1,
        borderColor: colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
        },

    view9:{marginLeft:0,
            maxWidth:"65%",    
        },

    input3:{fontSize:16,
    marginLeft: 0,
    marginBottom:0
    },

    view10: {flexDirection:'row',
            borderWidth:1,
            borderColor:colors.grey4,
            borderRadius:12,
            paddingLeft:5,
            marginTop:20,
            height:48
    },

    email:{fontSize:24,
            padding:0,
            marginBottom:0 ,
            marginTop:11,
            marginLeft:2
            },

    view11 : { marginLeft:30,
                maxWidth:"65%",    
            },

    input4:{fontSize:16,
            marginLeft: -20,
            marginBottom:-10
            },      

    view13:  {flexDirection:"row",
            height:40,
        } ,

    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },       
      
    view15:{alignItems:'center',
            justifyContent:'center',
            marginTop:10
          },

    text3: {fontSize:13
              },
              
    view16:{flexDirection:'row'},

    text4:{textDecorationLine:'underline',
        color:'green',
        fontSize:13
        },

    button1: {backgroundColor:colors.buttons,
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1, 
    borderColor:colors.buttons,
    height:50,
    paddingHorizontal:20,
    width:'100%'
                        
    },
    
    title1:{color:"white",
    fontSize:20,  
    fontWeight:"bold" ,
    alignItems:"center",
    justifyContent:"center"  ,
    marginTop:-3
                            
    },

    view17:{marginVertical:10,
            marginTop:30
          },

    view18:{flex:1,
            justifyContent:'flex-start',
            alignItems:'center',
            paddingTop:15,
          },

    text5:   {fontSize:15,
              fontWeight:'bold',
              },
              
    view19:{ backgroundColor:'white',
            paddingHorizontal:15,
            
            },

    view20:{marginTop:5
        },
    
    view21:{marginTop:5,
    alignItems:'flex-end',
    },

    button2:{backgroundColor:colors.background3,
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1, 
    borderColor:colors.background2,
    height:40,
    paddingHorizontal:20,
    // width:'100%'
                        
    },

    title2:{color:colors.buttons,
    fontSize:16,  
    fontWeight:"bold" ,
    alignItems:"center",
    justifyContent:"center"  ,
    marginTop:-3
                    
}
})