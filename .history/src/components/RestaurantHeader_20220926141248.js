import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {restauratsData} from '../global/Data';
import {colors} from '../global/styles';

import { Icon } from 'react-native-elements';

export default function RestaurantHeader({navigation, id})  {
  return (
    <View style = {styles.container}>
        <ImageBackground
            style = {styles.container}
            source = {{uri:restauratsData[id].images}}
            imageStyle = {styles.image}
        >
            
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{height:150,
    },

    view1: {flexDirection:"row",
            alignItems:"baseline",
        justifyContent:"space-between"
        },

    view2:{margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        },

    view3:{marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        },
        
    view4:{ marginTop:0,
            alignItems:"center",
            justifyContent:"center" 
        },

})