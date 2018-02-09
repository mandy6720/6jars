import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Secured from '../components/Secured';
import Login from '../components/Login';

export default class LoginScreen extends Component {
  state = {
    isLoggedIn: false
  }
  render() {
    return <Login
      onLoginPress={() => {
        this.props.navigation.navigate('LoggedIn');
      }}
    />;
  }
}
