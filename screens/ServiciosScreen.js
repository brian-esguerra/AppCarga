import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

export default class ServiciosScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
      },
      {
        name: 'Oferta 3',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Estado: Cancelado'
      },
      {
        name: 'Oferta 4',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Estado: Aceptado'
      },
      
    ]

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

          <View style={styles.div_list}>
            {
              list.map((l, i) => {
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
