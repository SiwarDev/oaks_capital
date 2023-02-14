import React from 'react';
import {Button, Text} from 'react-native';
import bg from '../assets/bg.png';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Cat = () => {
  return (
  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
    <View style={styles.logo}>
    <Text style={styles.textO}>O</Text>
      <Text style={styles.textC}>C</Text>
  </View>
    <Text style={styles.textL}>STONE IS CAPITAL</Text>
      <Text style={styles.text}>OAKS CAPITAL</Text>
    </ImageBackground>
    <View style={styles.view}>
    <Text style={styles.titleLog}>Log in</Text>
      <Text style={styles.title}>Email</Text>
    <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <View style={styles.buttonSection}>
      <TouchableOpacity
        style={styles.Button1}>
        <Text style={styles.text1}>Log in</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  </View>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: '500',
    textAlign: 'center',
    bottom:210,
  },
  textL: {
    color: 'white',
    fontSize: 24,
    lineHeight: 80,
    fontWeight: '100',
    textAlign: 'center',
    bottom:170
  },
  view:{
    width: '100%',
    height: '60%',
    bottom:0,
    backgroundColor:'white',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    position:'absolute'
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:5
  },
  title:{
    marginTop:10,
    marginLeft:14,
    color:'black',
    fontWeight:'200',
    fontSize: 13,
   
  },
  buttonSection:{
  marginTop:10,
  width:'80%',
  padding:10,
  marginLeft:40,
  
  },
  blackbutton:{
    borderWidth:1,
    padding:2,
    borderRadius: 10
    
  },
  Button1: {
    width: 320,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignSelf: 'center',

  },
  text1:{
    color:'white'
  },
  titleLog:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 20,
    paddingBottom:30
  },
  textO:{
  color:'white',
  //textAlign: 'center',
  fontSize:60,
  left:15
  },
  textC:{
  color:'white',
  //textAlign: 'center',
  fontSize:60,
  right:15
  },
  logo:{
    flexDirection: 'row',
    alignSelf: 'center',
    bottom:170,
  }
});
export default Cat;