import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MenuScreen = () => {
  return (
    <View>
        
    </View>
  )
}


export default MenuScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    view1:{ paddingHorizontal:10, 
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5
    },    
    text1:{
    color:colors.grey3,
    fontSize:18,
    fontWeight:"bold"
    }
})