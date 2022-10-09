import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import {menuData} from '../global/Data'
import ProductMainCard from '../components/ProductMainCard';

export default function Route1(){
    return(
        <View style= {{flex:1}}>
            <View style={styles.view2}>
                <Text> 메뉴 탭</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#673ab7'
    },
  
    view2:{marginTop:5,
        paddingBottom:20
    },
  
    scene2: { backgroundColor: '#673ab7' }  
  
});