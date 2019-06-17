import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'https://aboutreact.com/wp-content/uploads/2018/07/logosmalltransparen.png',
          }}
          style={{
            width: 20,
            height: 20,
            borderRadius: 20 / 2,
            marginLeft: 10,
          }}
        />
      </View>
    );
  }
}