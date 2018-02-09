import React, { Component } from 'react';
import { Button, View, StyleSheet, ImageBackground } from 'react-native';
import firebaseApp from '../../App'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    console.log(firebaseApp)
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={{uri: 'https://68.media.tumblr.com/ceeb3d8f3ed4b462f3fa3dd0b789f6b4/tumblr_oiwytpSOzG1tf8vylo1_1280.png'}} style={homeStyles.backgroundImage} >
        <View style={homeStyles.container}>
          <Button
            title="Go to Jane's profile"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
        </View>
      </ImageBackground>
    );
  }
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  }
})
