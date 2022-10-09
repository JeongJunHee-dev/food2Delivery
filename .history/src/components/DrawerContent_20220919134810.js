import React, {useState,useContext,useEffect} from 'react';

import { View, Text, Linking,
        Pressable, Alert, Switch, } from 'react-native';

import { DrawerContentScrollView, DrawerItemList,
         DrawerItem, } from '@react-navigation/drawer';

import { Avatar, Button, Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function DrawerContent() {
    
    return(
        <View>
            <View>
                <Avatar 
                    rounded
                    avatarStyle={styles.avatar}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    avatar: {
        borderWidth:4,
        orderColor:colors.pagebackground,
    }
})