import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SignInContextProvider } from "./src/contexts/authContext";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";



export default function App() {
  return(
    <SignInContextProvider>

      <View style ={styles.container}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor= {colors.statusbar}
        />

        <RootNavigator />
        
      </View>
      
    </SignInContextProvider>
  )
};//호출할 부분영역에 구역 설정

const styles = StyleSheet.create({
  container: {flex:1}
})//css에서 정렬 및 구성셋팅