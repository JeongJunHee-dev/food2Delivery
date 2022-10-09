import React,{useLayoutEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreeen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';



const ClientSearch = createStackNavigator()

export  function ClientStack({navigation,route}) {

    useLayoutEffect(()=>{
    
    const routeName = getFocusedRouteNameFromRoute(route);
    if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
        navigation.setOptions({tabBarVisible:false})
    }else{
        navigation.setOptions({tabBarVisible:true})
    }
    
    },[navigation,route]) //레스토랑 롬스크린 페이지에서 검색창으로 옵션을 걸때 탭바 비지블 설정

  return (
    <ClientSearch.Navigator>

        <ClientSearch.Screen 
            name= "SearchScreen"
            component= {SearchScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />

        <ClientSearch.Screen 
            name= "SearchResultScreen"
            component= {SearchResultScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />

        <ClientSearch.Screen 
            name= "RestaurantHomeScreen"
            component= {RestaurantHomeScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />

        <ClientSearch.Screen 
            name ="MenuProductScreen"
            component ={MenuProductScreen}
            options = {
                ()=>({
                    headerShown:false
                })
            }
        />

    </ClientSearch.Navigator>
  )
}// 스크린 스택 네비게이터 설정 (화면 경로 설정후 이동 처리)
