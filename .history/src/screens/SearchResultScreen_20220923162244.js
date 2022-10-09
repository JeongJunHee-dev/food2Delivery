import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { restauratsData } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>

        <View>

            <Text>총 {route.params.item} 검색 결과는 {restauratsData.length} 개 입니다.</Text>

        </View>

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
    },
    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    }
})