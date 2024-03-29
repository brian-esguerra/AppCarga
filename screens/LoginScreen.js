import React from 'react';
import { Platform, ScrollView, StyleSheet, StatusBar ,TextInput, View, TouchableHighlight, Dimensions, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Button, Icon, Divider, Avatar,Text } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      response:''
    }

    this.signIn = this.signIn.bind(this)

  }

  async signIn() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      
      this.setState({
        response: 'Usuario correcto'
      })

      setTimeout(() => {
        this.props.navigation.push('Navegacion')
      },1500 )

    }
    catch(error){
      this.setState({
        response: error.toString()
      })
      console.log(error.toString())
      alert(error.toString())
    }
  }

  render() {

    return (
       <View style={styles.container}>
          <View style={styles.logoContainer}>  
              <Text h3 style={styles.title}>
                Login
              </Text>

              <View style={styles.form}>
                <Text style={styles.text_input}> 
                  Correo electrónico </Text>
                <TextInput
                  style={styles.input}
                  placeholder='username o email'
                  keyboardType='email-address'
                  returnKeyType='next'
                  onChangeText={(email) => this.setState({email})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />
                <Text style={styles.text_input}>
                  Clave </Text>
                <TextInput
                  style={styles.input}
                  returnKeyType='go'
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry
                />
              </View>
          
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_login} onPress={this.signIn}>
                  <Text style={styles.text_btn}> Iniciar Sesión </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_reg} onPress={() => this.props.navigation.goBack()}>
                  <Text style={styles.text_btn}> Regresar </Text>
                </TouchableHighlight>
              </View>
          </View>
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
    flexGrow:1,
    justifyContent:'center'
  },
  title:{
    alignItems:'center',
    marginTop: 10,
    marginBottom:20,
    color: '#40739e',
    opacity:0.9,
    textAlign: 'center'
  },
  form:{
    paddingLeft:20,
    paddingRight:20,
    marginBottom:20
  },
  //titulos input
  text_input:{
    fontSize:15,
    color:'#95afc0'
  },
  //TextInput
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:5,
    color:'#fff',
    borderRadius:8,    
    paddingHorizontal:10,
    fontSize:16
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
