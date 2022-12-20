import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';
import { Tab1 } from './Tab1';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#5856D6',
        headerShown: false,
        tabBarLabelStyle:{

            marginBottom:10
        },
        tabBarStyle:{
            position:'absolute',
            backgroundColor:'rgba(255,255,255,0.92)',
            borderWidth:0,
            elevation:0,
            height:60

        }
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      
      >
      <Tab.Screen 
      name="Navigator " 
      component={Tab1}
      options={{
        tabBarLabel:"Listado",
        tabBarIcon:({color})=>(
        <Icon 
        color={color} 
        size={25}
        name="list-outline"
        />)
      }}
       />
      <Tab.Screen 
      name="SearchScreen" 
      component={Tab2Screen}
      options={{
        tabBarLabel:"Búsqueda",
        tabBarIcon:({color})=>(
        <Icon 
        color={color} 
        size={25}
        name="search-outline"
        />)
      }}
       />
    </Tab.Navigator>
  );
};
