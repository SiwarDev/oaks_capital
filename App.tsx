/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Cover from './cover/cover';
import ForgetPassword from './forgetPassword/forgetPassword';
import LogIn from './login/login';
import SetPassword from './setPassword/setPassword';

import Cat from './Start/start';
import Success from './success/Success';

function App(): JSX.Element {
return (
  //<Cover/>
  //<SetPassword/>
  //<LogIn/>
  //<Success/>
  <ForgetPassword/>
    //<Cat/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
