import React from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen () {

    return (
        <View style = {{}}>
            <SearchComponent />

            <View>
                <FlatList
                    style = {{marginBottom:1}}
                />
            </View>
        </View>
    )
}