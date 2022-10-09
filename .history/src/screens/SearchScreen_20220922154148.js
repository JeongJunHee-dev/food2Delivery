import React from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
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
                />
            </View>
        </View>
    )
}