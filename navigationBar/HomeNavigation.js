import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import PremiosPage from './pages/PremiosPage';
import ActionBarImage from './pages/ActionBarImage';
 
const App = createStackNavigator(
  {
    First: {
      screen: PremiosPage,
      //You can set the header image and title for the screen from here also
      /*navigationOptions: {
        title: 'Home Activity',
        headerLeft: <ActionBarImage />,
        headerStyle: {
          backgroundColor: '#e3e3e3',
        },
        headerTintColor: '#606070',
      }*/
    },
  }
  //You can set the header image and title for all the screens in once using defaultNavigationOptions
  /*,{
    defaultNavigationOptions: {
      title: 'Application Name',
      headerLeft: <ActionBarImage />,
      headerStyle: {
        backgroundColor: '#e3e3e3',
      },
      headerTintColor: '#606070',
    },
  }*/
);
 
//For react-navigation 2.0+ export default class App direct
//export default App;
//For react-navigation 3.0+ change it to following
export default createAppContainer(App);

