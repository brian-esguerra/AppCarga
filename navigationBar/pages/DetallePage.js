import React, { Component } from 'react';
 
import { Platform,StyleSheet, View, Text, Image,TouchableHighlight, ScrollView, ImageBackground } from 'react-native';
 
import { Card, ListItem, Button} from 'react-native-elements';
import { Icon } from 'expo';
import SegmentedControlTab from 'react-native-segmented-control-tab'
 
export default class DetallePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIndex: 0,
      customStyleIndex: 0,
    };
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

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

   handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  render() {

    const { selectedIndex, customStyleIndex } = this.state;

    return (

        <View style={styles.MainContainer}>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              
            <View style={styles.div_seccion}>
              <TouchableHighlight>
                <ImageBackground
                  source={require('../../assets/images/terpel.jpg')}
                  style={styles.div_imagen}>
                </ImageBackground>
              </TouchableHighlight>
            </View>

            <View style={{ padding:15, paddingTop:20 }}>
               <SegmentedControlTab
                values={['Descripción', 'Condiciones','Franquicias']}
                selectedIndex={customStyleIndex}
                onTabPress={this.handleCustomIndexSelect}
                borderRadius={0}
                tabsContainerStyle={{ height: 40, backgroundColor: 'F2F2F2' }}
                tabStyle={{
                  backgroundColor: 'white',
                  borderTopWidth: 1,
                  borderLeftWidth:0,
                  borderRightWidth:0,
                  borderTopColor: '#ccc',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                }}
                activeTabStyle={{ backgroundColor: 'white',borderBottomWidth: 1,
                  borderBottomColor: '#2b2b2b', }}
                tabTextStyle={{fontSize:16, color: '#ccc'}}
                activeTabTextStyle={{ color: '#2b2b2b',fontWeight: '500'}}
              />
              {customStyleIndex === 0 && (
                <View style={styles.tabContent}>
                  <Text style={styles.tabContentText}>Reciba 15% de descuento en toda la tienda Oboticário 
                  pagando la totalidad de la compra con las tarjetas de{'\n'}
                  crédito y/o débito Davivienda emitidas solo en Colombia.{'\n'}
                  Válido únicamente del 03 al 31 de agosto de 2017.{'\n'}
                  Aplica sólo en tiendas presenciales Oboticário en Bogotá</Text>

                  <Text style={styles.tabContentText}>
                  Consulte más detalles de la promoción en:</Text>
                  <Text style={{color:'red'}}>{'\n'}
                  www.oboticario.com.co</Text>

                  <Text style={styles.tabContentText}>{'\n'}
                  Redimelo con 200pts</Text>

                  <View style={styles.div}>
                    <TouchableHighlight style={styles.btn}>
                      <Text style={styles.text_btn}> Redimir </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              )}
              {customStyleIndex === 1 && (
                <View style={styles.tabContent}>
                  <Text style={styles.tabContentText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Maecenas nec justo sapien. Nullam feugiat, lacus in euismod imperdiet, 
                  eros augue venenatis purus, a pulvinar sapien sem eu ante. Vivamus lobortis rhoncus magna, 
                  vitae venenatis enim pretium ut. Pellentesque gravida luctus orci, ac mollis sem varius non. {'\n'}{'\n'}
                  Suspendisse scelerisque, ligula at venenatis posuere, arcu nunc finibus sapien, 
                  sit amet congue quam ante nec dui. Nullam id dui egestas, eleifend ligula sit amet, mollis mauris. {'\n'}
                  Curabitur congue rhoncus lectus, nec lacinia augue mollis vel.
                  </Text>
                </View>
              )}
              {customStyleIndex === 2 && (
                <View style={styles.tabContent}>
                  <Text style={styles.tabContentText}> 
                  Suspendisse scelerisque, ligula at venenatis posuere, arcu nunc finibus sapien, 
                  sit amet congue quam ante nec dui. Nullam id dui egestas, eleifend ligula sit amet, mollis mauris. {'\n'}
                  Curabitur congue rhoncus lectus, nec lacinia augue mollis vel.{'\n'}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. {'\n'}
                  Maecenas nec justo sapien. Nullam feugiat, lacus in euismod imperdiet, 
                  eros augue venenatis purus, a pulvinar sapien sem eu ante. Vivamus lobortis rhoncus magna, 
                  vitae venenatis enim pretium ut. Pellentesque gravida luctus orci, ac mollis sem varius non. 
                  
                  </Text>
                </View>
              )}
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
  icon: {
    paddingLeft: 10
  },
  contentContainer: {
    paddingTop: 5,
  },
  div_seccion:{
    paddingTop:5
  },
  div_imagen:{
    height: 200,
  },
  tabContent: {
    paddingTop:15,
    margin: 0,
    paddingLeft:10,
    paddingRight:10
  },
  tabContentText:{
    color: '#2b2b2b',
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 13,
  },
  div:{
    paddingTop:20,
    paddingLeft:50,
    paddingRight:50
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
});