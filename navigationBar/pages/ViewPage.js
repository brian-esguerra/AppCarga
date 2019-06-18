import React, { Component } from 'react';
 
import { Platform,StyleSheet, View, Text, Image,TouchableHighlight, ScrollView, ImageBackground } from 'react-native';
 
import { Card, ListItem, Button, Divider,Avatar} from 'react-native-elements';
import { Icon } from 'expo';
 
export default class ViewPage extends Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    //To set the header image and title for the current Screen
    title: 'Detalle',
    headerLeft: (
      <TouchableHighlight onPress={() => navigation.goBack()}>
          <Icon.Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={26}
            style={{ paddingLeft: 15}}
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

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              
            <View style={styles.div_seccion}>
              <Text style={styles.text}> Viaje en curso </Text>
            </View>

            <View style={styles.line} />
            
            <View style={styles.div_central}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width:'50%'}}>
                    <Icon.Ionicons
                      name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
                      size={20}
                      style={styles.img_checkMin}
                    />
                  <Text style={styles.text_n}> Alpina </Text>
                  <Text style={styles.text}> Cra. 4ta. Zona Ind </Text>
                </View>
                <View style={{width:'50%'}}>
                  <Icon.Ionicons
                      name={Platform.OS === "ios" ? "ios-pin" : "md-pin"}
                      size={20}
                      style={styles.img_checkMin}
                    />
                  <Text style={styles.text_n}> Puerto Brquilla </Text>
                  <Text style={styles.text}> Cra. 38 Cll 1a </Text>
                </View>
                
              </View>

              <View style={styles.div_prov}>
                <View style={styles.line} />
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '18%'}} >
                      <Avatar
                        size="medium"
                        rounded
                        source={{
                          uri:
                            'https://www.dataifx.com/sites/default/files/12dae4ce-2a98-483b-a296-b74349fa997d.jpg',
                        }}
                      />
                    </View>
                    <View style={{width: '46%'}}>
                      <Text style={styles.text_n}> Alpina S.A </Text>
                      <Text style={styles.text}> 57 viajes contratados </Text>
                    </View>
                    <View style={{width: '34%'}}>
                      <TouchableHighlight style={styles.btn_c}>
                        <Text style={styles.text_btn_c}> Contactar </Text>
                      </TouchableHighlight>
                    </View>
                </View>

                <View style={{paddingTop:20}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.div_group}>
                      <Icon.Ionicons
                        name={Platform.OS === "ios" ? "ios-checkmark-circle" : "md-checkmark-circle"}
                        size={18}
                        style={styles.img_group}
                      />
                      <Icon.Ionicons
                        name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
                        size={20}
                        style={styles.img_check}
                      />
                      <Text style={styles.text_n}>{'\n'}Evidencia</Text>
                      <Text style={styles.text}> Registro fotográfico de mercancia </Text>
                    </View>

                    <View style={styles.div_group}>
                     <Icon.Ionicons
                        name={Platform.OS === "ios" ? "ios-checkmark-circle" : "md-checkmark-circle"}
                        size={18}
                        style={styles.img_group}
                      />
                      <Icon.Ionicons
                        name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
                        size={20}
                        style={styles.img_check}
                      />
                      <Text style={styles.text_n}>{'\n'}Seguro de viaje por tan solo $40.000</Text>
                      <Text style={styles.text}> se descontara del pago del saldo </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.div}>
                    <TouchableHighlight style={styles.btn}>
                      <Text style={styles.text_btn}> Confirmar cargue </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btn_c}>
                      <Text style={styles.text_btn_c}> Cancelar </Text>
                    </TouchableHighlight>
                  </View>

            </View>

          </ScrollView>

        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 5,
    padding:10
  },
  div_seccion:{
    paddingTop:10,
    paddingBottom:10,
    alignItems:'center',
  },
  div_central:{
    backgroundColor: 'white',
    padding: 12,
    borderWidth:1,
    marginTop:10,
    borderColor:'#e7e7e7'
  },
  div_prov:{
    paddingTop:10,
    paddingBottom:10,
  },
  div_group:{
    width:'45%',
    padding:5,
    marginLeft:10,
    paddingTop:20,
    paddingTop:15,
    borderWidth:1,
    borderColor:'#0066ff',
    alignItems:'center',
    zIndex:1,
  },
  img_group:{
    position: 'absolute', // child
    top: -5, // position where you want
    right: -5,
    color:'#0066ff',
    zIndex:9999,
  },
  div:{
    paddingTop:20,
    paddingLeft:50,
    paddingRight:50
  },
  text:{
      fontSize:15,
      lineHeight: 22,
      fontWeight:'400',
      color:'#ccc'
  },
  text_n:{
      fontSize:15,
      lineHeight: 22,
      fontWeight:'500',
      color:'#000'
  },
  line: {
    backgroundColor: '#e9eaeb',
    height: 1,
    marginTop:10,
    marginBottom:10,
  },
  img_check:{
    color: '#0066ff',
    width:30,
    borderRadius:40,
    height:30,
    paddingTop:5,
    paddingLeft:8,
    alignItems:'center',
    backgroundColor:'#dedede'
  },
  img_checkMin:{
    color: '#0066ff',
    width:25,
    borderRadius:30,
    height:25,
    paddingTop:2,
    paddingLeft:5,
    alignItems:'center',
    backgroundColor:'#dedede'
  },
  //btn
  btn:{
    alignItems: 'center',
    backgroundColor: '#0066ff',
    padding: 10,
    borderRadius:4
  },
  text_btn:{
    fontSize:16,
    fontWeight: '500',
    color:'white'
  },
   btn_c:{
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  text_btn_c:{
    fontSize:16,
    fontWeight: '400',
    color:'#0066ff'
  },
});