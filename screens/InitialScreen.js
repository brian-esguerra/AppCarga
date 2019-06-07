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
                  size="xlarge"
                  rounded
                  title="DK"
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
              </View>
              <View>
                <Text h4 style={styles.title}>
                  CargApp
                </Text>
              </View>

            </View>
            <View style={[styles.box, styles.box3]}>
              <View style={styles.btn_login}>
                <Button 
                  title="Iniciar sesion"
                  onPress={() => this.props.navigation.push('Navegacion')}
                />
              </View>
              <View style={styles.btn_reg}>
                 <Button 
                  title="Registrarse"
                  type="outline"
                  onPress={() => this.props.navigation.push('Navegacion')}
                />
              </View>
            </View>
        </View>
    );
  }

  _viewHome = () => {
    //
  };

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
      backgroundColor: '#d2bb4b'
  },
  //content
  box2: {
      flex: 10,
      backgroundColor: '#d2bb4b'
  },
  //footer
  box3: {
      flex: 3,
      backgroundColor: '#d2bb4c',
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
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'center'
  },
  //btn login
  btn_login:{
    marginTop: 5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#d2bb4c'
  },
  //btn registrarse
  btn_reg:{
    marginTop: 10,
    paddingLeft:10,
    paddingRight:10,
    marginBottom:2,
    backgroundColor: '#d2bb4c'
  }
});
