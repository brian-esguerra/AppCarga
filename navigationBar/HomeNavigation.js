import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import PremiosPage from './pages/PremiosPage';
import DetallePage from './pages/DetallePage';
import ViewPage from './pages/ViewPage';
 
//Menu navegación
const App = createStackNavigator(
  {
    Home: 
    {
        screen: PremiosPage
    },
    Detalle: {
        screen: DetallePage
    },
    View: {
        screen: ViewPage
    },
  },
  {
    initialRouteName: 'Home',
  }
);
 
//For react-navigation 3.0+ change it to following
export default createAppContainer(App);

