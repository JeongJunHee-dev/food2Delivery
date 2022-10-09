import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {restauratsData} from '../global/Data';
import {colors} from '../global/styles';

import { Icon } from 'react-native-elements';

export default function RestaurantHeader({navigation, id})  {

    const index2 = 10;

    const [likes, setLiked] = useState(false); // 좋아요 처리
    const [counter, setCounter] = useState(-2); // 카운터 처리
    const [visible, SetVisible] = useState(false); //좋아요 처리 애니

  return (
    <View style = {styles.container}>
        <ImageBackground
            style = {styles.container}
            source = {{uri:restauratsData[id].images}}
            imageStyle = {styles.image}
        >

            <View style = {styles.view1}>

                <View style = {styles.view2}>
                    <Icon 
                        name = "arrow-left"
                        type= "material-community"
                        color= {colors.black}
                        size = {25}
                        onPress = {()=>navigation.goBack()}
                    />
                </View>

                <View style = {styles.view3}>
                    <Icon 
                            name = ""
                            type= "material-community"
                            color= {colors.black}
                            size = {25}
                            onPress = {()=>navigation.goBack()}
                        />
                </View>


            </View>
            
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