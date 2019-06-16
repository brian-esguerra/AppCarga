import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,TouchableHighlight,ActivityIndicator } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';

import { ExpoLinksView } from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebase from 'firebase';
import ignoreWarnings from 'react-native-ignore-warnings';

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state = {
      uid:'',
      email:'',
      password:'',
      name:'',
      document:'',
      phone:'',
      plate:'',
      typeAuto:'',
      response:'',
      loading: true
    }

    this.signOut = this.signOut.bind(this)
    this.updateUserData = this.updateUserData.bind(this)
  }

  componentDidMount(){
    this.getUserData();
  }

  /* Cerrar sesión */
  async signOut(){
    try{
      await firebase.auth().signOut()
      this.props.navigation.push('Home')
    }catch(error){
      console.log(error)
    }
  }

  /* Obtener info del usuario*/
  getUserData = () => {
    ignoreWarnings('Setting a timer');
    user = firebase.auth().currentUser;
    let uid       = 'undefined';
    let username  = 'undefined';
    if (user) {
      // User is signed in.
      username = user.email;
      uid = user.uid
      //obtener data - User
        const ref = firebase.database().ref('Users/' + uid)

        ref.once('value', (snapshot) => {
            const userdata = snapshot.val()
            this.setState({ name : userdata.name })
            this.setState({ email : userdata.email })
            this.setState({ document : userdata.document })
            this.setState({ phone : userdata.phone })
            this.setState({ plate : userdata.plate })
            this.setState({ typeAuto : userdata.typeAuto })

            this.setState({ loading: false })
        }, (error) => {
            console.log(error)
        })
    } else {
      // No user is signed in.
      username ='user undefined';
    }
  }

  /* Update info del usuario */

  async updateUserData() {
    try {
      ignoreWarnings('Setting a timer');

      user = firebase.auth().currentUser;
      let uid = user.uid;
      //Registrar info en Bd
      firebase.database().ref('Users/'+uid).set({
          name: this.state.name,
          document: this.state.document,
          phone: this.state.phone,
          plate: this.state.plate,
          typeAuto: this.state.typeAuto
      }).then((data)=>{
          //success callback
          alert('Datos actualizados')
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
          alert('Error: No se actualizo los datos')
      });

    }
    catch(error){
      this.setState({
        response: error.toString()
      })
    }
  }

  render() {

    let CardSource = FontAwesome; // set FontAwesome as the default icon source
    let icon_name = 'user-circle-o';
    let icon_color = '#95afc0';
     
    if(this.props.is_open){
      CardSource = this.props.src;
      icon_name = this.props.name;
      icon_color = this.props.color;
    }


    return (
      <ScrollView >
        <View>
        { this.state.loading ? 
            <View style={[styles.containerInd, styles.horizontal]}>
              <ActivityIndicator size="large" color="#f1c40f" /> 
            </View>  : 
  
          <View style={styles.container}>
            <View style={styles.img}>
              <TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
                <CardSource 
                  name={icon_name} 
                  size={60} 
                  color={icon_color} 
                />
              </TouchableHighlight>
            </View>

            <View style={styles.text_user}>
              <Text> 
                {this.state.email}
              </Text>
            </View>

            <View style={styles.form}>
              <Text style={styles.text_input}>
                Nombre:</Text>
              <TextInput
                style={styles.input}
                placeholder='nombre completo'
                returnKeyType='next'
                value={this.state.name}
                onChangeText={(name) => this.setState({name})}
                placeholderTextColor='rgba(255,255,255,0.9)'
              />

              <Text style={styles.text_input}> 
                No. Cédula:</Text>
              <TextInput 
                style={styles.input}
                placeholder='no. cédula'
                returnKeyType='next'
                keyboardType='numeric'
                value={this.state.document}
                maxLength={12}
                onChangeText={(document) => this.setState({document})}
                placeholderTextColor='rgba(255,255,255,0.9)'
              />

              <Text style={styles.text_input}>
                Celular </Text>
              <TextInput
                style={styles.input}
                placeholder='teléfono o celular'
                keyboardType='numeric'
                value={this.state.phone}
                placeholderTextColor='rgba(255,255,255,0.9)'
              />

              <Divider style={styles.divider}></Divider>

              <Text style={styles.text_input}>
                Placa Vehículo:</Text>
              <TextInput
                style={styles.input}
                placeholder='no. placa'
                returnKeyType='next'
                maxLength={6}
                value={this.state.plate}
                onChangeText={(plate) => this.setState({plate})}
                placeholderTextColor='rgba(255,255,255,0.9)'
              />

              <Text style={styles.text_input}>
                Tipo de Vehículo:</Text>
              <TextInput
                style={styles.input}
                placeholder='camioneta, turbo, sencillo, mula'
                maxLength={15}
                value={this.state.typeAuto}
                onChangeText={(typeAuto) => this.setState({typeAuto})}
                placeholderTextColor='rgba(255,255,255,0.9)'
              />

            </View>

            <View style={styles.div}>
              <TouchableHighlight style={styles.btn_update} onPress={this.updateUserData}>
                <Text style={styles.text_btn_update}> Editar Perfil </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.div}>
              <TouchableHighlight style={styles.btn_logout} onPress={this.signOut}>
                <Text style={styles.text_btn_logout}> Cerrar sesión </Text>
              </TouchableHighlight>
            </View>

          </View>

          }
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
  containerInd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: {
    justifyContent: 'center',
    padding: 10
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
