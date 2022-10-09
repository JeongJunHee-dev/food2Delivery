import React from 'react';

import {View, Text, StyleSheet, FlatList, 
        TouchableWithoutFeedback, ImageBackground} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { filterData } from '../global/Data';

export default function SearchScreen () {

    return (
        <View style = {{}}>
            <SearchComponent />

            <View>

                <FlatList
                    style = {{marginBottom:1}}
                    data = {filterData}
                    keyExtractor = {item=>item.id}
                    renderItem = {({item})=>(
                        <TouchableWithoutFeedback>

                            <View>
                                <ImageBackground>
                                    style = {styles.image}
                                    source = {item.image}

                                </ImageBackground>
                            </View>

                        </TouchableWithoutFeedback>
                    )}
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
