import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image,TouchableHighlight, ScrollView } from 'react-native';
 
import { Card, ListItem, Button, Icon, Tile } from 'react-native-elements'
import ActionBarImage from './ActionBarImage'
 
export default class HomeActivity extends Component {
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: 'Premios',
    headerLeft: <ActionBarImage />,
    headerRight: <ActionBarImage />,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#000000',
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
         
        <View style={styles.divBtn}>
            <TouchableHighlight style={styles.btn_logout} onPress={this.signOut}>
                <Text style={styles.text_btn_logout}> Hogar </Text>
              </TouchableHighlight>
        </View>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            
          <View>

            <Tile
                imageSrc={require('../../assets/images/img-1.jpg')}
                title=""
                featured
                caption=""
                contentContainerStyle={{ height: 20, marginTop:20 }}
              />

              <Tile
                imageSrc={require('../../assets/images/img-2.jpg')}
                title=""
                featured
                caption=""
                contentContainerStyle={{ height: 20, marginTop:20 }}
              />

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
  contentContainer: {
    paddingTop: 30,
  },
});