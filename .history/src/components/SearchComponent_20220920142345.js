import {colors} from "../global/styles";
import {Icon} from 'react-native-elements';
import { StyleSheet, Text, View, TouchableNativeFeedback, Modal } from 'react-native';
import React,{useState,useRef} from 'react';

export default function SearchComponent() {

    const  [modalVisible, setModalVisible] = useState(false); // 모달창 설정

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
                <TouchableNativeFeedback>
                <Text>검색바가 열려있습니다.</Text>
                </TouchableNativeFeedback>
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