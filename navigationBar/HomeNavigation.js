import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import PremiosPage from './pages/PremiosPage';
import DetallePage from './pages/DetallePage';
 
//Menu navegación
const App = createStackNavigator(
  {
    Home: 
    {
        screen: PremiosPage, 
        /*navigationOptions: {
          header: null
        },*/
    },
    Detalle: {
        screen: DetallePage,
        /*navigationOptions: {
          header: null
        },*/  
    },
  },
  {
    initialRouteName: 'Home',
  }
);
 
//For react-navigation 3.0+ change it to following
export default createAppContainer(App);

