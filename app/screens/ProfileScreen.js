import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.name + "'s Profile" : 'Profile',
      headerStyle: {
        backgroundColor: '#ccc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;
    return (
      <View style={profileStyles.container}>
        <Text>{`Hi, I'm ${name}'s profile`}</Text>
        <Button title="Go Back" onPress={() => this.props.navigation.goBack()}></Button>
      </View>
    )
  }
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
