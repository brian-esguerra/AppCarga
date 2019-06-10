import React from 'react';
import { Platform, ScrollView, StyleSheet ,TextInput, View, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Button, Icon, Divider, Avatar,Text } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import * as firebase from 'firebase';


export default class RegistroScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      response:''
    }

    this.signUp = this.signUp.bind(this)

  }

  async signUp() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      
      this.setState({
        response: 'Usuario registrado correctamente'
      })

      setTimeout(() => {
        this.props.navigation.push('Navegacion')
      },1500 )

    }
    catch(error){
      this.setState({
        response: error.toString()
      })
    }
  }

  render() {

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logoContainer}>  
              <Text h3 style={styles.title}>
                Crear cuenta
              </Text>

              <View style={styles.form}>
                <Text style={styles.text_input}> 
                  Correo electrónico </Text>
                <TextInput
                  style={styles.input}
                  placeholder='username o email'
                  returnKeyType='next'
                  keyboardType='email-address'
                  onChangeText={(email) => this.setState({email})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />
                <Text style={styles.text_input}>
                  Clave </Text>
                <TextInput
                  style={styles.input}
                  returnKeyType='next'
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry
                />
                <Text style={styles.text_input}>
                  Teléfono </Text>
                <TextInput
                  style={styles.input}
                  placeholder='teléfono o celular'
                  keyboardType='numeric'
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />
              </View>
          
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_login} onPress={this.signUp}>
                  <Text style={styles.text_btn}> Continuar </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_reg} onPress={() => this.props.navigation.goBack()}>
                  <Text style={styles.text_btn}> Regresar </Text>
                </TouchableHighlight>
              </View>
          </View>
        </KeyboardAvoidingView>
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
