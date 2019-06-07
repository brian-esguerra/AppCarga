import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Button, Input, Divider } from 'react-native-elements';

import { ExpoLinksView } from '@expo/samples';
import { FontAwesome } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class PerfilScreen extends React.Component {
  static navigationOptions = {
    title: 'Mi Perfil',
  };

  render() {

    let user = 'user_email@undefined.co';

    let CardSource = FontAwesome; // set FontAwesome as the default icon source
    let icon_name = 'user-circle-o';
    let icon_color = '#393939';
     
    if(this.props.is_open){
      CardSource = this.props.src;
      icon_name = this.props.name;
      icon_color = this.props.color;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.img}>
          <TouchableHighlight onPress={this.props.clickCard} activeOpacity={0.75} underlayColor={"#f1f1f1"}>
            <CardSource 
              name={icon_name} 
              size={100} 
              color={icon_color} 
            />
          </TouchableHighlight>
        </View>

        <View style={styles.text_user}>
          <Text> 
            {user}
          </Text>
        </View>

        <View>
          <Divider style={{ backgroundColor: 'blue' }} />
        </View>

        <View style={styles.div_input}>
          <Text>
            Nombre
          </Text>
          <Input
            placeholder='Nombre'
            shake={true}
          />
        </View>

        <View style={styles.div_input}>
          <Text>
            Correo
          </Text>
          <Input
            placeholder='Correo electronico'
            shake={true}
            editable={false}
          />
        </View>

        <View style={styles.div_input}>
          <Text>
            Cedula
          </Text>
          <Input
            placeholder='No. Cedula'
            shake={true}
          />
        </View>

        <View style={styles.div_btn}>
          <Button
            onPress={this.onPressLearnMore}
            title="Editar Perfil"
            color="#841584"
          />
        </View>

        <View>
          <Button style={styles.btn_logout}
            title="Cerrar sesion"
            type="outline"
            onPress={() => this.props.navigation.push('Home')}
          />
        </View>

        <View>
          <Divider style={{ backgroundColor: 'white' }} />
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
    paddingTop: 15,
    backgroundColor: '#fff',
  }, 
  img: {
    flex: 1,
    alignItems: 'center'
  },
  text_user: {
    alignItems: 'center',
    fontSize: 50,
    padding: 20,
    fontWeight: 'bold'
  },
  div_input:{
    padding: 10,
  },
  div_btn:{
    padding: 20
  },
  btn_logout:{
    padding: 20,
    paddingTop: 15,
    marginTop: 3
  }
});
