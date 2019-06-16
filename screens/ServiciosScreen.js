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

export default class ServiciosScreen extends React.Component {
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
        firebase.database().ref('OfertsUsers/').orderByChild('fecha_solicitud').on('value', snapshot => {
          this.setState({ listOferts: [] })
          snapshot.forEach(c => { 
            i = c.val();
            if (i.key_user == uid) {
              let nameOfert;
              //Buscar data
              const refData = firebase.database().ref('Oferts/'+i.key_ofert)
              refData.once('value', (snapshot) => {
                const dataOfert = snapshot.val()
                nameOfert = dataOfert.destino

                //add a List
                this.setState(state => ({
                listOferts: [...state.listOferts, 
                  {
                    "name": 'Oferta: '+nameOfert,
                    "key_ofert": i.key_ofert,
                    "avatar_url": 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    "subtitle": 'Estado: '+i.status
                  }]
                }))

              }, (error) =>{
                console.log(error)
              })

              
            }
          })
          this.setState({ loading: false });
      })
    } else {
      // No user is signed in.
      username ='user undefined';
    }
  }

  render() {

    const list = [
      {
        name: 'Oferta 1',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Estado: Aceptado'
      },
      {
        name: 'Oferta 2',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Estado: Pendiente'
      }
    ]

    const listOf = this.state.listOferts;

    return (
      <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Servicios aplicados</Text>
            <Text style={styles.getStartedText}>
              Consulta el estado de tus ofertas.
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
                      leftAvatar={{ source: { uri: l.avatar_url } }}
                      rightIcon={{ name: 'forward' }}
                      title={l.name}
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
