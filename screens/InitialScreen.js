import React from 'react';
import { Platform, ScrollView, StyleSheet, StatusBar , View, TouchableHighlight, Dimensions, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Button, Icon, Divider, Avatar,Text } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import AppNavigator from '../navigation/AppNavigator';
import LoginForm from '../screens/LoginScreen';
import Registro from '../screens/RegistroScreen';

class HomeScreen extends React.Component {

  render() {

    return (
       <View style={styles.container}>
          <View style={styles.logoContainer}>
                <Avatar
                  rounded
                  source={require('../assets/images/logo-home1.png')}
                  size="xlarge"
                  onPress={() => this.props.navigation.push('Navegacion')}
                  overlayContainerStyle={{backgroundColor: '#95afc0',padding:8}}
                />
                <Text h3 style={styles.title}>
                  CargApp
                </Text>
          </View>

            <View style={styles.formContainer}>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_login} onPress={() => this.props.navigation.push('Login')}>
                  <Text style={styles.text_btn}> Iniciar Sesión </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_reg} onPress={() => this.props.navigation.push('Registro')}>
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
    Navegacion: {
        screen: AppNavigator,
        navigationOptions: {
          header: null
        },  
    },
    Login:{
      screen: LoginForm,
      navigationOptions: {
        header: null
      },
    },
    Registro:{
      screen: Registro,
      navigationOptions:{
        header: null
      }
    } 
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
    flexDirection: 'column',
    backgroundColor: '#f1c40f'
  },
  //
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  title:{
    marginTop: 10,
    color: '#fff',
    width:160,
    opacity:0.9,
    textAlign: 'center'
  },
  formContainer:{
    marginBottom: 10
  },
  //div botones
  div:{
    marginTop: 5,
    marginBottom:5,
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
    fontSize: 16
  }
});
