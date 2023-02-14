import React,{useState} from 'react';
import {Button, Text,Dimensions,Image} from 'react-native';
import Video from "react-native-video";
import bg from '../assets/bg.png';
import logo from '../assets/logo.png';
import simple_logo from '../assets/simple_logo.png';
import symbol from '../assets/Symbol.png';

const { height } = Dimensions.get("window");
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const setPassword = () => {
  return (
    <><Video
      source={require("../assets/bg_video.mp4")}
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={"cover"}
      rate={1.0}
      ignoreSilentSwitch={"obey"} />
      <View style={styles.container}>
        <Image source={symbol} style={styles.image1}/>
        <Image source={logo} style={styles.logo1}/>
      </View>
      <View style={styles.view}>
        <Text style={styles.titleLog}>Set Password</Text>
        <Text style={styles.title}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="****************"
          secureTextEntry={true} />
        <Text style={styles.title}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="****************"
          secureTextEntry={true}/>
       
          <TouchableOpacity
            style={styles.Button1}>
            <Text style={styles.text1}>Set New Password</Text>
          </TouchableOpacity>
       

      </View></>
 )
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0, 
    right: 0
    },
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
    bottom: 0,
    backgroundColor:'white',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    position:'absolute'
    
  },
  input: {
    margin: '2%',
    borderWidth: 1,
    padding: '3%',
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#1883a1",
    fontWeight:'500'
  },

  title:{
    marginTop:'3%',
    marginLeft:'5%',
    color:'#000000',
    fontWeight:'400',
    fontSize: 10,
   
  },
  
  blackbutton:{
    borderWidth:1,
    padding:2,
    borderRadius: 10
    
  },
  Button1: {
    width: '90%',
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginTop:'5%'
    
  },

  text1:{
    color:'white'
  },
  titleLog:{
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 28,
    marginTop:'15%',
    marginBottom:'1%',
  },
  
  logo:{
    flexDirection: 'row',
    alignSelf: 'center',
    bottom:170,
  },
  container: {
    alignItems: 'center',
    height: '100%',
    width:'100%'
  },
  logo1:{
    width: '100%',
    height: '10%',
      
      
  },
  image1:{
      width: '20%',
      height: '15%',
      
      
  },
  
});
export default setPassword;