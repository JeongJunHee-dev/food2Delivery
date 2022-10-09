import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen () {

    return (
        <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
            <SearchComponent />
        </View>
    )
}