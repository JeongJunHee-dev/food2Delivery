import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

import {
    Icon 
} from 'react-native-elements';

import {colors, parameters} from '../global/styles';

export default function FoodCard({
    OnPressFoodCard, restaurantName, deliveryAvailable,
    discountPercent, numberOfReview, bussinessAddress,
    farAway, averageReview, images, screenWidth

}) {

    return(
        <TouchableOpacity>
            <View style = {{...styles.cardView, width:screenWidth}}>
                <Image 
                    style =  {{...styles.image, width:screenWidth}}
                    source = {{uri:images}}
                />
            </View>

            <View>
                <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style = {{flex:1, flexDirection:"row"}}>

                    <View style = {styles.distance}>
                        <Icon 
                            name = "place" type = "material"
                            color = {colors.grey2} size = {18}
                            iconStyle = {{marginTop:3}}
                        />

                        <Text style = {styles.Min}> {farAway} Min</Text>
                    </View>

                    <View style = {{flex:9, flexDirection: "row"}}>

                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.grey1,
        marginTop: 5,
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1,
    }, 
    Min: {
        fontSize: 12,
        fontWeight: 5,
        paddingTop: 5,
        color: colors.grey3,
    }
})