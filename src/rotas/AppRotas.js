import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import Coracao from '../assets/coracao.svg'
import Home from '../assets/home.svg'

const Tab = createBottomTabNavigator();

export default function AppRota(){
    return <NavigationContainer>
    <Tab.Navigator screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarIcon:({ color }) => {
        let Icon = Home; 

        if(route.name === 'MelhoresProdutores'){
          Icon = Coracao;
        }
        return <Icon color={color}/>
      },
      tabBarActiveTintColor:'#2A9F85',
      tabBarInactiveTintColor: '#C7C7C7'  
      })}>
      <Tab.Screen name='Home' component={ProdutorRotas}/>
      <Tab.Screen name='MelhoresProdutores' component={MelhoresProdutoresRotas}/>
    </Tab.Navigator>
    </NavigationContainer>
}
