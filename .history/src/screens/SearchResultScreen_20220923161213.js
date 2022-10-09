import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { restaurantsData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>
      <Text>검색 결과는 {route.params.item} 입니다.</Text>

      <SearchResultCard 
        screenWidth = {SCREEN_WIDTH}
        images = {restaurantsData[0].images}
        averageReview = {restaurantsData[0].averageReview}
        numberOfReview = {restaurantsData[0].numberOfReview}
      />
    </View>
  )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})