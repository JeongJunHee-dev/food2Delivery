import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, } from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import { restauratsData } from '../global/Data';
import {colors,fonts} from '../global/styles';


const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RestaurantHomeScreen = ({navigation, route}) => {

    const {id, restaurant} = route.params

  return (
    <View style = {styles.container}>
      <ScrollView>

        <View>

          <RestaurantHeader id = {id} navigation= {navigation} />

          {restauratsData[id].discount && 
          <View style = {styles.view1}>
            <Text style={styles.text1}>할인율은 총 금액의{restauratsData[id].discount}% 입니다.</Text>
          </View>
          }

          <View style={styles.view2}>
            <View style= {styles.view3}>

            </View>
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({

  container:{flex:1,
    paddingTop:20
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

    
})