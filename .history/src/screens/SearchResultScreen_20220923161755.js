import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { restauratsData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>
      <Text>총 {restauratsData.length} 결과는 {route.params.item} 입니다.</Text>

      <SearchResultCard 
        screenWidth = {SCREEN_WIDTH}
        images = {restauratsData[0].images}
        averageReview = {restauratsData[0].averageReview}
        numberOfReview = {restauratsData[0].numberOfReview}
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