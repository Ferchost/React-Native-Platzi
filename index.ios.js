/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  AppRegistry,
  Image,
  Alert
} from 'react-native';
var fer = "Fernando";
var Empty = "uio";

class Platzi extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={{uri: 'data:image/png;base64,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'}} />
       <Text style={styles.welcome}> Platzi </Text>
        <TextInput 
        placeholder={'Usuario'}
        style={styles.ti}
        onChangeText={(text)=> this.setState({Username: text})}/>      
        <TextInput 
        secureTextEntry="true"
        onChangeText={(text)=> this.setState({Pasword: text})}
        placeholder={'Pasword'}
        style={styles.ti}/> 
        <TouchableHighlight
        onPress={this.test.bind(this)}
        style={styles.button}>
      <Text style={styles.tb}>
      Login
      </Text>
      </TouchableHighlight>

      </View>
    );
  }
  test(){
    console.log('Nuevo Usuario: '+ this.state.Username);
    console.log('Esta es su contraseña (: : '+ this.state.Pasword);
    
    
  }
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    backgroundColor: '#262929',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    marginTop: 30,
    height: 80,
    width: 80,
  },
  ti:{

  height:40,
  marginTop:10,
  padding: 10,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#3EA129',
  color: '#000000',
  borderRadius: 20,
  backgroundColor: '#FFF'
  },
  button: {
  
  height: 50,
  backgroundColor: '#3EA129',
  alignSelf: 'center',
  marginTop: 10,
  justifyContent: 'center',
  borderRadius: 5



  },
  tb: {
  fontSize: 22,
  color: '#FFF',
  alignSelf: 'center'

  },
  });

AppRegistry.registerComponent('Platzi', () => Platzi);
