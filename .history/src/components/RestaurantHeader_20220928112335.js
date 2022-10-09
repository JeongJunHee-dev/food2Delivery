import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import {restauratsData} from '../global/Data';
import {colors} from '../global/styles';

import { Icon } from 'react-native-elements';

export default function RestaurantHeader({navigation, id})  {

    const index2 = 10;

    const currentValue = new Animated.Value(1); // 애니 처릴할때 밸류값 설정

    const [liked, setLiked] = useState(false); // 좋아요 처리
    const [counter, setCounter] = useState(-2); // 카운터 처리
    const [visible, setVisible] = useState(false); //좋아요 처리 애니

    const likeHander = () => {
        if(liked == false)
                setVisible(true)

        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(()=> {
        if(liked == true){
            Animated.spring(currentValue,{
                toValue:3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue, {
                    toValue:1,
                    useNativeDriver:true,
                    friction:2
                }).start(()=>{
                    setVisible(false)
                })
            })
                
        }
    },[liked]) // 하트 뛸때 밸류값 던진 뒤 움직임 처리

  return (
    <View style = {styles.container}>
        <ImageBackground
            style = {styles.container}
            source = {{uri:restauratsData[id].images}}
           
        >

            <View style = {styles.view1}>

                <View style = {styles.view2}>
                    <Icon 
                        name = "arrow-left"
                        type= "material-community"
                        color= {colors.black}
                        size = {25}
                        onPress = {()=>navigation.goBack()}//빽처리
                    />
                </View>

                <View style = {styles.view3}>
                    <Icon 
                            name = {liked && (index2 == counter) ? "favorite" : "favorite-border"}
                            type= "material"
                            color= 'red'
                            size = {30}
                            onPress = {likeHander} //하트처리
                        />
                </View>

            </View>

            <View style={styles.view4}>

                {visible && (index2 == counter) && 
                    <Animated.View style= {{transform:[{scale:currentValue}]}}>
                        <Icon  name = "favorite" size = {40} color = "red" type= "material" />
                    </Animated.View>
                }

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