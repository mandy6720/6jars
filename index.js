import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';

import App from './App';

// Initialize Firebase
const firebaseConfig = {
  // apiKey: "AIzaSyCrnq_sSW9UohCTFt6b2TgXusiOXZ15D7I",
  // authDomain: "jars-7791c.firebaseapp.com",
  // databaseURL: "https://jars-7791c.firebaseio.com",
  // storageBucket: "jars-7791c.appspot.com",
  apiKey: "AIzaSyCrnq_sSW9UohCTFt6b2TgXusiOXZ15D7I",
  authDomain: "jars-7791c.firebaseapp.com",
  databaseURL: "https://jars-7791c.firebaseio.com",
  projectId: "jars-7791c",
  storageBucket: "jars-7791c.appspot.com",
  messagingSenderId: "567962887589"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default rootRef = firebase.database().ref();
// const itemsRef = rootRef.child('items');

AppRegistry.registerComponent('NonCRNAapp', () => App);
