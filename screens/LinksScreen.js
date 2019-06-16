import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import * as firebase from 'firebase';
import ignoreWarnings from 'react-native-ignore-warnings';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props)
    this.state = {
      uid:'',
      response:'',
      listOferts:[],
      loading: true
    }

    this.addnewOfert = this.addnewOfert.bind(this)

  };

  componentDidMount() {
    this.getOferts();
    //this.addOfert();
  }


  /* Obtener info de Ofertas*/
  getOferts = () => {
    ignoreWarnings('Setting a timer');
    user = firebase.auth().currentUser;
    let uid       = 'undefined';
    let username  = 'undefined';
    let listint = [];
    if (user) {
      // User is signed in.
      username = user.email;
      uid = user.uid
      //obtener data - Oferts
        this.setState({ listOferts: [] })
        firebase.database().ref('Oferts/').orderByChild('valor').on('value', snapshot => {
          snapshot.forEach(c => { 
            i = c.val();
            this.setState(prevState => ({
              listOferts: [...prevState.listOferts, 
                {
                  "name": 'Origen: '+i.origen+'\nDestino: '+i.destino+'\n\nGanancia: $'+i.valor,
                  "avatar_url": i.avatar_url,
                  "key": c.key,
                  "subtitle": 'fecha carga: '+i.fecha_carga+'\nfecha publicación: '+i.fecha_publicacion
              }
              ]
            }))
          })
          this.setState({ loading: false });
      })
    } else {
      // No user is signed in.
      username ='user undefined';
    }
  }

  async addnewOfert(idItem) {

    try{
      ignoreWarnings('Setting a timer');
      user = firebase.auth().currentUser;
      firebase.database().ref('OfertsUsers/').push({
          key:'12349013242',
          key_ofert:idItem,
          key_user:user.uid,
          status:'Pendiente',
          fecha_solicitud:'15/6/2019'
      }).then((data)=>{
          //success callback
          alert('Oferta solicitada')
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
    }catch(error){
      this.setState({
        response: error.toString()
      })
    }


  }

  render() {

    const listOf =this.state.listOferts;

    return (

      <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Consulta las mejores opciones</Text>
            <Text style={styles.getStartedText}>
              Empieza a Buscar.
            </Text>
          </View>

          { this.state.loading ? 
            <View style={[styles.containerInd, styles.horizontal]}>
              <ActivityIndicator size="large" color="#f1c40f" /> 
            </View>  : 

            <View style={styles.div_list}>
              {
                listOf.map((l, i) => {
                  return (
                    <ListItem
                      style={styles.item}
                      key={i}
                      rightIcon={{ name: 'gps-fixed' }}
                      title={l.name}
                      onPress={() => {this.addnewOfert(l.key)} }
                      subtitle={l.subtitle}
                    />
                  );


                })
              }

            </View>
          }

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  containerInd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horizontal: {
    justifyContent: 'center',
    marginTop:30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  div_list:{
    
  },
  item: {
    backgroundColor:'#f1c40f',
    borderBottomColor:'#95afc0',
    borderBottomWidth:1
  },
});
