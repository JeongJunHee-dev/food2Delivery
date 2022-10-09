import {colors} from "../global/styles";
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, TouchableNativeFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import React,{useState,useRef} from 'react';

export default function SearchComponent() {

    const navigation  = useNavigation();

    const [modalVisible, setModalVisible] = useState(false); // 모달창 설정
    const [textInputFossued,setTextInputFossued] = useState(true); //검색창 설정
    const textInput = useRef(0); //고정값 지정으로 텍스트 값 전달

  return (
    <View style = {{alignItems:"center"}}>

        <TouchableNativeFeedback
            onPress={()=>{
                setModalVisible(true)
            }}
        >

            <View style = {styles.SearchArea}>

                <Icon name =  "search"   
                        style = {styles.searchIcon} 
                        type ="material"
                        iconStyle ={{marginLeft:5}}
                        size = {32}     
                />

                <Text style ={{fontSize:15}}>뭐 찾능교?</Text>

            </View>

        </TouchableNativeFeedback>

        <Modal
            animationType = "fade"
            transparent = {false}
            visible = {modalVisible}
        >
            <View style = {styles.modal}>
                <View style = {styles.view1}>
                    <View style = {styles.TextInput}>

                        <Animatable.View
                            animation = {textInputFossued?"fadeInRight":"fadeInLeft"}
                            duration = {400}
                        >
                            <Icon name = {textInputFossued ? "arrow-back" : "search" }  
                                    onPress = {()=>{
                                                    if(textInputFossued)
                                                    setModalVisible(false)
                                                    setTextInputFossued(true)
                                            }}
                                    style = {styles.icon2} 
                                    type  ="material"
                                    iconStyle ={{marginRight:5}}
                            />

                        </Animatable.View>

                        <TextInput 
                            style = {{width:"90"}}
                            placeholder = ""
                            autoFocus = {false}
                            ref = {textInput}
                        />

                        <Animatable.View>

                            <Icon 
                                name = {textInputFossued ? "cancel" : null } 
                                iconStyle ={{color:colors.grey3}}
                                type ="material"
                                style={{marginRight:-10}}
                                onPress ={()=>{
                                        textInput.current.clear() 
                                       // handleSearch()          
                                }}
                            />

                        </Animatable.View>

                    </View>
                </View>

                <FlatList
                        data={data}
                        renderItem={({ item }) => (
                        <TouchableOpacity 
                                onPress = {() =>{

                                        Keyboard.dismiss
                                        navigation.navigate("SearchResultScreen",{item:item.name})
                                        setModalVisible(false)
                                        setTextInputFossued(true)
                                            }} >
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2, fontSize:15 }}>{item.name}</Text>
                                </View>
                        </TouchableOpacity>
                            )}
                        keyExtractor={item => item.id}

                />             


            </View>

        </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:0,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:10,
         paddingRight:10
  
      },

    SearchArea:{marginTop :10,
        width:"94%",
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:"row",
        alignItems:"center"
      },

    searchIcon:{ fontSize:24,
                  padding:5,
                  color:colors.grey2,
      },

    view1:{ height:70,
            justifyContent:"center",
            
            paddingHorizontal:10,
      },

    view2:{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
    },

    icon2 :{ fontSize:24,
            padding:5,
            color:colors.grey2,
    },
    modal :{
        flex:1
    }
})