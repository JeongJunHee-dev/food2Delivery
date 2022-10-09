import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from './MenuTabs';
import { restauratsData, menu} from '../global/Data';


const initialLayout = SCREEN_WIDTH;// 스크린 레이아웃 설정(너비 부분 리액트 네이티브 디맨션으로 설정)

const MenuProductScreen = ({navigation, route}) => {

    const [route] = useState(menu) //데이터 내 메뉴 호출
    const [index,setIndex] = useState(0)// 모달창에서 탭 처리시 뿌리기

    const renderTabBar = props =>(
        <TabBar 
            {...props}
            indicatorStyle = {{backgroundColor:colors.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style ={styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )// 모달창에 탭바 처리시 함수사용으로 해당 색 호출

    const renderScene = ({route}) => {

        switch(route.key){
          case 1:
            return <Route1 name= {navigation} /> 
    
          case 2:
            return <Route2 name= {navigation} /> 
    
          case 3:
            return <Route3 name= {navigation} /> 
    
          case 4:
            return <Route4 name= {navigation} />
            
          case 5:
            return <Route5 name= {navigation} /> 
    
          case 6:
            return <Route6 name= {navigation} /> 
    
          case 7:
            return <Route7 name= {navigation} /> 
    
          case 8:
            return <Route8 name= {navigation} /> 
    
          default:
              return null;
        }
    
      }

  return (
    
    <View style={styles.container}>
          <View style = {styles.view1}>
            <Icon 
                name = "arrow-left"
                type= "material-community"
                color= {colors.black}
                size = {25}
                onPress = {()=>setModalVisible(false)}//빽처리
            />
            <Text style={styles.text1}>메뉴</Text>
          </View>

          <TabView //뷰 쪽에 네비게이션 활성으로 상단 메뉴바 부터 기능 활성
              navigationState={{index,route2}}
              renderScene = {renderScene}
              onIndexChange = {setIndex2}
              initialLayout = {initialLayout}
              renderTabBar = {renderTabBar2}
              tabBarPosition = 'top'
              navigation= {navigation}
              route = {route}
            />
    </View>     
      
  )
}

export default MenuProductScreen

const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 top:0,
                 left:0,
                 right:0
         },
    
    view1:{flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:25
    },
    
    text1:{fontWeight:"bold",
          marginLeft:40,
          color:colors.black,
          fontSize:18
        },
    
    view2:{marginTop:5,
          paddingBottom:20
        },
    
    tab:{ paddingTop :0,
          backgroundColor:colors.buttons,
          justifyContent:"space-between",
         // alignItems:"center"
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color: colors.cardbackground
          },
      
    tabStyle:{width:SCREEN_WIDTH/4,
              maxHeight:45,
            },
    scene2: { backgroundColor: '#673ab7' } 
})