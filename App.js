import { StackNavigator } from 'react-navigation';

import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';

export default StackNavigator({
  Home: {
    screen: LoginScreen,
  },
  LoggedIn: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  }
});
