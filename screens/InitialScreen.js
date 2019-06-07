import React from 'react';
import { Platform, ScrollView, StyleSheet, StatusBar , View, TouchableHighlight, Dimensions, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {Card, ListItem,Button, Icon, Divider, Avatar,Text } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import AppNavigator from '../navigation/AppNavigator';

var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;



class HomeScreen extends React.Component {

  render() {

    return (
       <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}>
              <View style={styles.div_login}>
                <Avatar
                  rounded
                  source={require('../assets/images/logo-home1.png')}
                  size="xlarge"
                  overlayContainerStyle={{backgroundColor: '#95afc0',padding:8}}
                />
              </View>
              <View>
                <Text h3 style={styles.title}>
                  CargApp
                </Text>
              </View>

            </View>
            <View style={[styles.box, styles.box3]}>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_login} onPress={() => this.props.navigation.push('Navegacion')}>
                  <Text style={styles.text_btn}> Iniciar Sesión </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_reg} onPress={() => this.props.navigation.push('Navegacion')}>
                  <Text style={styles.text_btn}> Registrase </Text>
                </TouchableHighlight>
              </View>
            </View>
        </View>
    );
  }


}


//Menu navegación
const RootStack = createStackNavigator(
  {
    Home: 
    {
        screen: HomeScreen, 
        navigationOptions: {
        header: null
        },
    },
    Navegacion: AppNavigator
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class InitialScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  //header
  box1: {
      flex: 4,
      backgroundColor: '#f1c40f'
  },
  //content
  box2: {
      flex: 10,
      backgroundColor: '#f1c40f'
  },
  //footer
  box3: {
      flex: 2.5,
      backgroundColor: '#f1c40f',
      fontSize: 16
  },
  //logo inicial
  div_login: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title:{
    marginBottom: 20,
    color: '#130f40',
    textAlign: 'center'
  },
  //div botones
  div:{
    marginTop: 5,
    paddingLeft:10,
    paddingRight:10
  },
  //btn login
  btn_login:{
    alignItems: 'center',
    backgroundColor: '#95afc0',
    padding: 10,
    borderRadius:8
  },
  //btn registrarse
  btn_reg:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius:8
  },
  text_btn:{
    fontSize: 15
  }
});
