import React from 'react';
import { ScrollView, StyleSheet, Text , View, TouchableHighlight } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';

import {Card, ListItem, Button, Icon, Divider } from 'react-native-elements';

export default class ServiciosScreen extends React.Component {
  static navigationOptions = {
    title: 'Mis Servicios',
  };

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.Subtitle}>
          <Text>
            Listado de los servicios que he aplicado...
          </Text>
        </View>

        <View>
          <Card
            title='CARD'
            image={require('../assets/images/robot-prod.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>

          <Card
            title='CARD 2'
            image={require('../assets/images/robot-prod.png')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  Subtitle:{
    paddingTop: 12,
  }
});
