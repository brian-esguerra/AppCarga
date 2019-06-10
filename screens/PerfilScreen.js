import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,TouchableHighlight } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';

import { ExpoLinksView } from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebase from 'firebase';

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
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
    let icon_color = '#95afc0';
     
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

        <View style={styles.form}>
          <Text style={styles.text_input}> 
            Correo electrónico </Text>
          <TextInput
            style={styles.input}
            placeholder='username o email'
            returnKeyType='next'
            keyboardType='email-address'
            onChangeText={(email) => this.setState({email})}
            value={username}
            placeholderTextColor='rgba(255,255,255,0.8)'
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
            placeholderTextColor='rgba(255,255,255,0.8)'
          />
        </View>

        <View style={styles.div}>
          <TouchableHighlight style={styles.btn_update}>
            <Text style={styles.text_btn_update}> Editar Perfil </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.div}>
          <TouchableHighlight style={styles.btn_logout} onPress={this.signOut}>
            <Text style={styles.text_btn_logout}> Cerrar sesión </Text>
          </TouchableHighlight>
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
    marginTop: 20,
    backgroundColor: '#fff'
  }, 
  img: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  text_user: {
    alignItems: 'center',
    padding: 20
  },
form:{
    paddingLeft:20,
    paddingRight:20,
    marginBottom:25
  },
  //titulos input
  text_input:{
    fontSize:15,
    color:'#95afc0'
  },
  //TextInput
  input:{
    height:40,
    backgroundColor:'#95afc070',
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
  text_btn_update:{
    fontSize:15,
    color:'#40739e'
  },
  text_btn_logout:{
    fontSize:15,
    color:'#fff'
  }
});
