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
            <View>

            </View>
        </TouchableOpacity>
    )
}