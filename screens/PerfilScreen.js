import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,TouchableHighlight } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';

import { ExpoLinksView } from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebase from 'firebase';

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    title: 'Mi Perfil',
  };

  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      response:''
    }

    this.signOut = this.signOut.bind(this)
  }

  async signOut() {
    try{
      await firebase.auth().signOut()
      this.props.navigation.push('Home')
    }catch(error){
      console.log(error)
    }
  }

  render() {

    user = firebase.auth().currentUser;
    let username = 'undefined';

    if (user) {
      // User is signed in.
      username = user.email;
    } else {
      // No user is signed in.
      username ='user undefined';
    }

    let CardSource = FontAwesome; // set FontAwesome as the default icon source
    let icon_name = 'user-circle-o';
    let icon_color = '#393939';
     
    if(this.props.is_open){
      CardSource = this.props.src;
      icon_name = this.props.name;
      icon_color = this.props.color;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.img}>
          <TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
            <CardSource 
              name={icon_name} 
              size={100} 
              color={icon_color} 
            />
          </TouchableHighlight>
        </View>

        <View style={styles.text_user}>
          <Text> 
            {username}
          </Text>
        </View>

        <View>
          <Divider style={{ backgroundColor: 'blue' }} />
        </View>

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
          <TouchableHighlight style={styles.btn_update}>
            <Text style={styles.text_btn}> Editar Perfil </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.div}>
          <TouchableHighlight style={styles.btn_logout} onPress={this.signOut}>
            <Text style={styles.text_btn}> Cerrar sesión </Text>
          </TouchableHighlight>
        </View>

        <View>
          <Divider style={{ backgroundColor: 'white' }} />
        </View>

      </ScrollView>
    );
  }

  //funtions

  onPressLearnMore= () => {
    console.log('click');
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f1c40f'
  }, 
  img: {
    flex: 1,
    alignItems: 'center'
  },
  text_user: {
    alignItems: 'center',
    fontSize: 50,
    padding: 20,
    fontWeight: 'bold'
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
  btn_logout:{
    alignItems: 'center',
    backgroundColor: '#95afc0',
    padding: 10,
    borderRadius:8
  },
  //btn update
  btn_update:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius:8
  },
});
