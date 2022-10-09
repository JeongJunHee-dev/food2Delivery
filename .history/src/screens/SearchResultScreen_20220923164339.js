import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { restauratsData } from '../global/Data';
import {colors} from "../global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style = {styles.container}>

        <View>

            <Text style={styles.listHeader}>총 {route.params.item} 검색결과는 {restauratsData.length} 개 입니다.</Text>

        </View>

      <SearchResultCard 
        screenWidth = {SCREEN_WIDTH}
        images = {restauratsData[0].images}
        averageReview = {restauratsData[0].averageReview}
        numberOfReview = {restauratsData[0].numberOfReview}
        restaurantName = {restauratsData[0].restaurantName}
        farAway = {restauratsData[0].farAway}
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