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

import { Card, ListItem, Button, Icon, Tile } from 'react-native-elements'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    const list = [
  {
    title: 'Buscar ofertas',
    icon: 'pageview'
  },
  {
    title: 'Aplicar a las nuevas ofertas',
    icon: 'check-circle'
  },
  {
    title: 'Ver el estado de mis servicios',
    icon: 'history'
  },
]

    return (
      <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Tile
            imageSrc={require('../assets/images/img-1.jpg')}
            title="Bienvenido,"
            featured
            caption="Encuentra las mejores ofertas"
            contentContainerStyle={{ height: 70 }}
          />

          <View style={styles.div_list}>
          <Text style={styles.getStartedText}>
            La herramienta te permitira:
          </Text>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  style={styles.item}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                />
              ))
            }
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Actualiza toda tu información</Text>
        </View>
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
    marginTop:20
  },
  item: {
    backgroundColor:'#95afc0',
    borderBottomColor:'#95afc0',
    borderBottomWidth:1
  },
});
