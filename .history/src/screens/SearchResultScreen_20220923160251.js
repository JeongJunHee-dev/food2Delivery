import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';


const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>
      <Text>검색 결과는 {route.params.item} 입니다.</Text>

      <SearchResultCard />
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})