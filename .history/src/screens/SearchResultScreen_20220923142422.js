import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>
      <Text>Search Result for {route.params.item}</Text>
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})