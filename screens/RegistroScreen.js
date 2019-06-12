import React from 'react';
import { Platform, ScrollView, StyleSheet ,TextInput, View,Alert, TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Button, Icon, Divider, Avatar,Text } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import * as firebase from 'firebase';
import ignoreWarnings from 'react-native-ignore-warnings';

export default class RegistroScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      name:'',
      document:'',
      phone:'',
      plate:'',
      typeAuto:'',
      response:''
    }

    this.signUp = this.signUp.bind(this)

  }

  async signUp() {
    try {
      ignoreWarnings('Setting a timer');
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      
      this.setState({
        response: 'Usuario registrado correctamente'
      })

      user = firebase.auth().currentUser;
      let uid = user.uid;
      //Registrar info en Bd
      firebase.database().ref('Users/'+uid).set({
          email: this.state.email,
          name: this.state.name,
          document: this.state.document,
          phone: this.state.phone,
          plate: this.state.plate,
          typeAuto: this.state.typeAuto
      }).then((data)=>{
          //success callback
          this.props.navigation.push('Navegacion')
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
          alert('Datos erroneos')
      });

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
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <Text h3 style={styles.title}>
                Crear cuenta
              </Text>
              <View style={styles.form}>
                <Text style={styles.text_input}> 
                  Correo electrónico:</Text>
                <TextInput
                  style={styles.input}
                  placeholder='username o email'
                  returnKeyType='next'
                  keyboardType='email-address'
                  onChangeText={(email) => this.setState({email})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />
                <Text style={styles.text_input}>
                  Clave:</Text>
                <TextInput
                  style={styles.input}
                  returnKeyType='next'
                  maxLength={10}
                  onChangeText={(password) => this.setState({password})}
                  secureTextEntry
                />

                <Divider style={styles.divider}></Divider>

                <Text style={styles.text_input}>
                  Nombre:</Text>
                <TextInput
                  style={styles.input}
                  placeholder='nombre completo'
                  returnKeyType='next'
                  onChangeText={(name) => this.setState({name})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />

                <Text style={styles.text_input}> 
                  No. Cédula:</Text>
                <TextInput 
                  style={styles.input}
                  placeholder='no. cédula'
                  returnKeyType='next'
                  keyboardType='numeric'
                  maxLength={12}
                  onChangeText={(document) => this.setState({document})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />

                <Text style={styles.text_input}>
                  Celular:</Text>
                <TextInput
                  style={styles.input}
                  placeholder='teléfono o celular'
                  returnKeyType='next'
                  keyboardType='numeric'
                  maxLength={10}
                  onChangeText={(phone) => this.setState({phone})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />

                <Divider style={styles.divider}></Divider>

                <Text style={styles.text_input}>
                  Placa Vehículo:</Text>
                <TextInput
                  style={styles.input}
                  placeholder='no. placa'
                  returnKeyType='next'
                  maxLength={6}
                  onChangeText={(plate) => this.setState({plate})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />

                <Text style={styles.text_input}>
                  Tipo de Vehículo:</Text>
                <TextInput
                  style={styles.input}
                  placeholder='camioneta, turbo, sencillo, mula'
                  maxLength={15}
                  onChangeText={(typeAuto) => this.setState({typeAuto})}
                  placeholderTextColor='rgba(255,255,255,0.7)'
                />

              </View>
          
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_login} onPress={this.signUp}>
                  <Text style={styles.text_btn_login}> Continuar </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.div}>
                <TouchableHighlight style={styles.btn_reg} onPress={() => this.props.navigation.goBack()}>
                  <Text style={styles.text_btn_reg}> Regresar </Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
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
  contentContainer:{
    marginTop:10
  },
  title:{
    alignItems:'center',
    marginTop: 10,
    marginBottom:10,
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
  divider:{
    height:2,
    backgroundColor: '#DDDDDD',
    marginTop:10,
    marginBottom:10
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
  text_btn_login:{
    fontSize: 16,
    color: '#DDDDDD'
  },
  text_btn_reg:{
    fontSize: 16,
    color: '#95afc0'
  }
});
