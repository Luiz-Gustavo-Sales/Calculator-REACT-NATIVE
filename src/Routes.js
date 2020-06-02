import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {NavigationContainer, useLinkProps} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import login from './Screens/Login/index';
import register from './Screens/Register/index';
import Contador from './Screens/Contador/index';
import setting from './Screens/Setting/index';
import home from './Screens/Home/index';
import Avo from './Screens/ComunicacaoDiretaProps/index';
import Calculadora from './Screens/Components/Screens/page/index';
import App from '../App'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="Setting" component={setting} />
      <Tab.Screen name="Contador" component={Contador} />
      <Tab.Screen name="Eventos" component={Avo} />
      <Tab.Screen name="Calculadora" component={Calculadora} />
      <Tab.Screen name="App" component={App} />
    </Tab.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerType="slide">
        <Drawer.Screen name="Mytabs" component={MyTabs} />
        <Drawer.Screen name="login" component={login} />
        <Drawer.Screen name="Register" component={register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});
