import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {View, Text, StyleSheet, FlatList, 
        TouchableWithoutFeedback, ImageBackground, Dimensions,} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { filterData2 } from '../global/Data';
import  { colors,} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen ({navigation}) {

    return (
        <View style = {{flex:1 ,marginBottom:10}}>
            <SearchComponent />

            <View style ={{marginTop:10}}>

                <View>

                    <FlatList
                        style = {{}}
                        data = {filterData2}
                        keyExtractor = {item=>item.id}
                        renderItem = {({item,index})=>(
                            <TouchableWithoutFeedback
                                onPress = {() => {
                                    navigation.navigate("SearchResultScreen", {item:item.name})
                                }} //해당 네비게이션으로 통해 사진 클릭시 페이지 이동처리
                            >

                                <View style = {styles.imageView}>
                                    <ImageBackground
                                        style = {styles.image}
                                        source = {{uri:item.image}}
                                    >     
                                        
                                        <View style = {styles.textView}>
                                            <Text style ={{color:colors.cardbackground}}>{item.name}</Text>
                                        </View>

                                    </ImageBackground>
                                </View>

                            </TouchableWithoutFeedback>
                        )}

                        horizontal = {false}
                        showsVerticalScrollIndicator = {false}
                        numColumns = {2}
                        ListHeaderComponent = { <Text style = {styles.listHeader}>상단 카테고리</Text> }
                        ListFooterComponent = {<Footer />}
                    />

                </View>

            </View>

        </View>
    )
}

const Footer = (props) => {

    const navigation = useNavigation(); //네비 활성화로 Props 처리후 네비돌리기

    return(

        <View style ={{marginTop:20, marginBottom:30}}>

                <View style = {{}}>

                    <FlatList
                        style = {{marginBottom:10}}
                        data = {filterData2}
                        keyExtractor = {item=>item.id}
                        renderItem = {({item,index})=>(
                            <TouchableWithoutFeedback
                                onPress = {() => {
                                    navigation.navigate("SearchResultScreen", {item:item.name})
                                }} //해당 네비게이션으로 통해 사진 클릭시 페이지 이동처리
                            >

                                <View style = {styles.imageView}>
                                    <ImageBackground
                                        style = {styles.image}
                                        source = {{uri:item.image}}
                                    >     
                                        
                                        <View style = {styles.textView}>
                                            <Text style ={{color:colors.cardbackground}}>{item.name}</Text>
                                        </View>

                                    </ImageBackground>
                                </View>

                            </TouchableWithoutFeedback>
                        )}

                        horizontal = {false}
                        showsVerticalScrollIndicator = {false}
                        numColumns = {2}
                        ListHeaderComponent = { <Text style = {styles.listHeader}>추가 카테고리</Text> }
                    />

                </View>

            </View>
    )
}

const styles = StyleSheet.create({

    imageView : {  borderRadius:10,
                    justifyContent:"center",
                    alignItems:"center",
                    width:SCREEN_WIDTH*0.4475,
                    height:SCREEN_WIDTH*0.4475,
                    marginLeft:SCREEN_WIDTH*0.035,
                    marginBottom:SCREEN_WIDTH*0.035
    },

    image :  {     height:SCREEN_WIDTH*0.4475,
                    width:SCREEN_WIDTH*0.4475,
                    borderRadius:10, 
    },
    
    listHeader : {  fontSize:16,
                    color:colors.grey2,
                    paddingBottom:10,
                    marginLeft:12
                    
                    },

    textView : {  height:SCREEN_WIDTH*0.4475,
                    width:SCREEN_WIDTH*0.4475,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:'rgba(52, 52, 52,0.3)'
                 },


})