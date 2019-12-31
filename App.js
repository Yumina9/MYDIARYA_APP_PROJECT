import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import WriteScreen from './screens/WriteScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const BaseNavi = createBottomTabNavigator({
  MainScreen :{
    screens: MainScreen
  },
  DetailScreen :{
    screens: DetailScreen
    
  },
  WriteScreen :{
    screens: WriteScreen
  },
  
  tabBarOptions:{
    showLabel :false,
    }
    
})

const BaseNavi2 = createStackNavigator(
  {
    Write : WriteScreen,
    Tab : BaseNavi,
    Detail : DetailScreen,
  },
  {
    initialRouteName: 'Tab',
    // mode : 'modal', -> 아이폰 유저만 사용
    headerMode:'none'
  }
)
const MyNavi = createAppContainer(BaseNavi)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyNAvi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
