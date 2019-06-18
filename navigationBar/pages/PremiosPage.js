import React, { Component } from 'react';
 
import { Platform,StyleSheet, View, Text, Image,TouchableHighlight, ScrollView, ImageBackground } from 'react-native';
 
import { Card, ListItem, Button} from 'react-native-elements'
import { Icon } from 'expo';
 
export default class PremiosPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
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
      <TouchableHighlight onPress={() => navigation.push('View')}>
        <Icon.Ionicons
          name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"}
          size={26}
          style={{ paddingRight: 15}}
        />
      </TouchableHighlight>
    ),
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000000',
  });
 
  render() {
    return (

        <View style={styles.MainContainer}>
           
          <View style={styles.divBtn}>
            <ScrollView horizontal={true} style={styles.container} contentContainerStyle={{height:50}}>
              <TouchableHighlight style={styles.btn} onPress={this.openAlert}>
                  <Text style={styles.text_btn}> Hogar </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={this.openAlert}>
                  <Text style={styles.text_btn}> Mujer </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={this.openAlert}>
                  <Text style={styles.text_btn}> Hombre </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.btn} onPress={this.openAlert}>
                  <Text style={styles.text_btn}> Niños </Text>
                </TouchableHighlight>
            </ScrollView>
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
    backgroundColor: '#e5ecf5',
  },
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10
  },
  contentContainer: {
    paddingLeft: 15,
    paddingRight:15
  },
  div_seccion:{
    paddingTop:10
  },
  div_imagen:{
    height: 180,
    position: 'relative', // because it's parent
    top: 2,
    left: 2
  },
  txt_imagen:{
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 25,
    width:100,
    color: 'white',
    position: 'absolute', // child
    top: 45, // position where you want
    left: 15
  },
  divBtn:{
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop:12
  },
  //btn
  btn:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    width:90,
    height:45,
    marginLeft:6,
    marginRight:6,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#ccc'
  },
  text_btn:{
    fontSize:16,
    fontWeight: '500',
    color:'#000000'
  },
});