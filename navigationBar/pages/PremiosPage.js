import React, { Component } from 'react';
 
import { Platform,StyleSheet, View, Text, Image,TouchableHighlight, ScrollView, ImageBackground } from 'react-native';
 
import { Card, ListItem, Button} from 'react-native-elements'
import { Icon } from 'expo';
 
export default class PremiosPage extends Component {
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: 'Premios',
    headerLeft: (
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
        size={26}
        style={{ paddingLeft: 15}}
      />
    ),
    headerRight: (
      <Icon.Ionicons
        name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
        size={26}
        style={{ paddingRight: 15}}
      />
    ),
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000000',
  };
 
  render() {
    return (

        <View style={styles.MainContainer}>
           
          <View style={styles.divBtn}>
              <TouchableHighlight style={styles.btn_logout} onPress={this.openAlert}>
                  <Text style={styles.text_btn_logout}> Hogar </Text>
                </TouchableHighlight>
          </View>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              
            <View style={styles.div_seccion}>
              <TouchableHighlight onPress={() => this.props.navigation.push('Detalle')}>
                <ImageBackground
                  source={require('../../assets/images/img-1.jpg')}
                  style={styles.div_imagen}>
                  <Text style={styles.txt_imagen}>
                    15% de descuento en cambio de aceites
                  </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>

            <View style={styles.div_seccion}>
              <TouchableHighlight onPress={() => this.props.navigation.push('Detalle')}>
               <ImageBackground
                  source={require('../../assets/images/img-2.jpg')}
                  style={styles.div_imagen}>
                  <Text style={styles.txt_imagen}>
                    3x2 en tu pasaporte Nitro
                  </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>

            <View style={styles.div_seccion}>
            <TouchableHighlight onPress={() => this.props.navigation.push('Detalle')}>
               <ImageBackground
                  source={require('../../assets/images/img-1.jpg')}
                  style={styles.div_imagen}>
                  <Text style={styles.txt_imagen}>
                    $10 mil de descuentos en Almuerzo especial con postre
                  </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>

          </ScrollView>

        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: '#e5ecf5',
  },
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10
  },
  contentContainer: {
    paddingTop: 5,
  },
  div_seccion:{
    paddingTop:10
  },
  div_imagen:{
    height: 200,
    position: 'relative', // because it's parent
    top: 2,
    left: 2
  },
  txt_imagen:{
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    width:100,
    color: 'white',
    position: 'absolute', // child
    top: 45, // position where you want
    left: 15
  }
});