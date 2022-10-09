import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>
      <Text>검색 결과는 {route.params.item} 입니다.</Text>
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})