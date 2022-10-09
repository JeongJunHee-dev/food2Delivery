import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Modal } from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import { restauratsData, menu} from '../global/Data';
import {colors,fonts} from '../global/styles';
import {Icon} from 'react-native-elements';
import { TabView,TabBar } from 'react-native-tab-view';
import MenuScreen from './RestaurantTabs/MenuScreen';
import { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from './MenuTabs';


const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;// 스크린 레이아웃 설정(너비 부분 리액트 네이티브 디맨션으로 설정)

const RestaurantHomeScreen = ({navigation, route}) => {

    const {id, restaurant} = route.params

    const [route2, setRoute2] = useState(menu) //데이터 내 메뉴 호출

    const[routes] = useState([
      {key:'first',title:"메뉴"},
      {key:'second',title:"정보"},
      {key:'third',title:"리뷰"},
      {key:'fourth',title:"갤러리"},
    ])// 라우트를 통해 탭 뷰로 메뉴바 뿌리기

    const [index,setIndex] = useState(0)// 탭뷰 처리시 인덱스 뿌리기
    const [index2,setIndex2] = useState(0)// 모달창에서 탭 처리시 뿌리기

    const [modalVisible, setModalVisible] = useState(false);// 모달창으로 새창전환

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
  )//렌더 탭바 함수 사용은 해당 색깔로 블록 설정

  const renderTabBar2 = props =>(
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

  const UpdateRoute1 =()=>{
    return(
        <View>

        </View>
    )
  }//렌더 신에서 리턴값 지정

  const menuPressed =()=>{
    setModalVisible(true)
  }

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
    <View style = {styles.container}>
      <ScrollView>

        <View>

          <RestaurantHeader id = {id} navigation= {navigation} />

          {restauratsData[id].discount && 
          <View style = {styles.view1}>
            <Text style={styles.text1}>할인율은 총 금액의 {restauratsData[id].discount}% 입니다.</Text>
          </View>
          }

          <View style ={styles.view2}>

              <View style ={styles.view3}>
                  <Text style ={styles.text2}>{restauratsData[id].restaurantName}</Text>
                  <Text style ={styles.text3}>{restauratsData[id].foodType}</Text>

                  <View style ={styles.view4}>
                      <Icon name ="star" type ="material-community" color = {colors.grey3} size = {15} />
                      <Text style ={styles.text4}>{restauratsData[id].averageReview}</Text>
                      <Text style ={styles.text5}>{restauratsData[id].numberOfReview}</Text>
                      <Icon name ="map-marker" type ="material-community" color = {colors.grey3} size = {15} />
                      <Text style ={styles.text6}>{restauratsData[id].farAway} km 떨어져 있음</Text> 
                  </View>

              </View>

              <View style ={styles.view5}>
                  <Text style = {styles.text6}>포장 수령시</Text>

                  <View style ={styles.view7}>
                      <Text style ={styles.text7}>{restauratsData[id].collectTime}</Text>
                      <Text style ={styles.text8}>분</Text>
                  </View>

              </View>

              <View style ={styles.view8}>
                  <Text style ={styles.text6}>배달시</Text>

                  <View style ={styles.view9}>
                      <Text style = {styles.text9}>{restauratsData[id].deliveryTime}</Text>
                      <Text style ={styles.text11}>분</Text>
                  </View>

              </View>
                
          </View>

          
        </View>

        <View style={styles.view10}>
            <TabView //뷰 쪽에 네비게이션 활성으로 상단 메뉴바 부터 기능 활성
              navigationState={{index,routes}}
              renderScene = {UpdateRoute1}
              onIndexChange = {setIndex}
              initialLayout = {initialLayout}
              renderTabBar = {renderTabBar}
              tabBarPosition = 'top'
            />
        </View>

        {
          index === 0 && 
            <MenuScreen onPress = {menuPressed} />
        }

      </ScrollView>

      <TouchableOpacity>
          <View style = {styles.view11}>

            <View style = {styles.view12}>
                <Text style ={styles.text13}>목록에 추가</Text>
                <View style ={styles.view13}>
                    <Text style={styles.text13}>0</Text>
                </View>
            </View>

          </View>
      </TouchableOpacity>

      <Modal visible= {modalVisible} animationType = "slide">

          <View style = {styles.view14}>
            <Icon 
                name = "arrow-left"
                type= "material-community"
                color= {colors.black}
                size = {25}
                onPress = {()=>setModalVisible(false)}//빽처리
            />
            <Text style={styles.text14}>메뉴</Text>
          </View>
          <TabView //뷰 쪽에 네비게이션 활성으로 상단 메뉴바 부터 기능 활성
              navigationState={{index2,route2}}
              renderScene = {renderScene}
              onIndexChange = {setIndex2}
              initialLayout = {initialLayout}
              renderTabBar = {renderTabBar2}
              tabBarPosition = 'top'
            />
            
      </Modal>

    </View>
  )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({

  container:{flex:1,
    paddingTop:20,
  },

  view1:{
    padding:3,
    alignItems:"center",
    justifyContent:"center"
  },

  text1:{color:"green",
  fontSize:14,
  fontWeight:"bold"
  },

  view2:{ flexDirection:"row",
    flex:1,
    marginBottom:5,
    marginHorizontal:10,
    justifyContent:"space-between",
  },

  view3:{flex:8,
  },

  text2:{fontSize:20,
    fontWeight:"bold",  
    color:colors.grey1
  },

  text3:{fontSize:15,
    color:colors.grey3
  },

  view4:{flexDirection:'row',
    alignItems:"center",
    marginTop:5
  },

  text4:{fontFamily :fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:2,
  },

  text5:{fontFamily :fonts.android.bold,
    fontSize:13,
    color:colors.grey3,
    marginLeft:2,
    marginRight:5
  },
  text6:{fontFamily :fonts.android.bold,
      fontSize:13,
      color:colors.grey3,
      marginLeft:0,
  },

  view5:{ flex:3,
        alignItems:"center"
  },

  text6:{fontSize:15,
      fontWeight:"bold",
      color:colors.grey1
  },

  view7:{width:40,
      height:40,
      alignItems:"center",
      borderRadius:20,
      justifyContent:"space-around",
  },

  text7:{fontSize:16,
      fontWeight:"bold",
      color:colors.black,
      marginTop:5
  },

  text8:{fontSize:13,
      color:colors.black,
      marginBottom:5
  },

  view8:{flex:3,
      alignItems:"center"
  },

  text9:{fontSize:15,
    fontWeight:"bold",
    color:colors.cardbackground
  },

  view9:{width:40,
    height:40,
    backgroundColor:colors.buttons,
    alignItems:"center",
    borderRadius:20,
    justifyContent:"space-around",
  },

  text10:{fontSize:16,
    fontWeight:"bold",
    color:colors.cardbackground,
    marginTop:5
  },

  text11:{fontSize:13,
      color:colors.cardbackground,
      marginBottom:5
  },

  view10:{elevation:10,
    backgroundColor:colors.pagebackground
  },

  view11:{backgroundColor:colors.buttons,
      height:50,
      alignContent:"center",
      marginBottom:0,
      justifyContent:"center"
      
  },

  view12:{flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
  },

  text12:{padding:10,
      fontWeight:"bold",
      fontSize:18,
      color:colors.cardbackground
  },

  view13:{ borderWidth:1,
      marginRight:10,
      borderColor:colors.cardbackground,
      borderRadius:6,
      paddingBottom:2
  },

  text13:{paddingHorizontal:3,
      fontWeight:"bold",
      fontSize:18,
      color:colors.cardbackground,
  },

  tab:{ paddingTop :0,
    backgroundColor:colors.buttons,
    justifyContent:"space-between",
    alignItems:"center"
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
  view14:{flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:25
    },
    
  text14:{fontWeight:"bold",
          marginLeft:40,
          color:colors.black,
          fontSize:18
      },
    
  view15:{marginTop:5,
          paddingBottom:20
      },          
    
})