import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ServiciosScreen from '../screens/ServiciosScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Ofertas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


/* -- Vista Servicios --*/
const ServiciosStack = createStackNavigator({
  Servicios: ServiciosScreen,
});

ServiciosStack.navigationOptions = {
  tabBarLabel: 'Mis Servicios',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    /> 
  ),
};

/*-- Vista Perfil --*/
const PerfilStact = createStackNavigator({
  Perfil: PerfilScreen,
});

PerfilStact.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
    ),
};

/* Crear Toolbar de Navegación */
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ServiciosStack,
  PerfilStact,
});
