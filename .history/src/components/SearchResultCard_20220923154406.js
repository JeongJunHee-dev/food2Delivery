import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchResultCard = () => {
  return (
    <View>
      <Text>SearchResultCard</Text>
    </View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({
    view1: {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        },
        
    image: {position:"absolute",
            top:0,
            right:0,
            backgroundColor:'rgba(52, 52, 52,0.4)',
            padding:2,
            alignItems:"center",
            justifyContent:"center", 
            borderTopRightRadius:5,
            borderBottomLeftRadius:12
    },
      
    imageStyle:{borderTopLeftRadius:5,
                borderTopRightRadius:5,
                },
    
    text1:{color:"white",
            fontSize:20,
            fontWeight:'bold',
            marginTop:-3
        },
    
    text2 : {color:"white",
                fontSize:13,
                marginRight:0,
                marginLeft:0
            },
    
    view2 : { flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginTop:-5
                },
    text3:{
            fontSize:10,
            fontWeight:'bold',
            color:colors.grey2,
            },
    
    text4:{
            fontSize:10,
            fontWeight:'bold',
            color:colors.grey2,
            },
    view3:{ flexDirection:"column",
            marginHorizontal:5,
            marginBottom:10,
            marginLeft:0,
            marginTop:5
            },
    
    text5:{
        fontSize:17,
        fontWeight:'bold',
        color:colors.grey1,
    },
    
    view4 :{flex:4,
            flexDirection:"row",
            borderRightWidth:1,
            borderRightColor:colors.grey4,
            paddingHorizontal:5,

            } ,
    
    view5:  {
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
        },
        
    text6:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10,
        
        }
})