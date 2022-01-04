import React from 'react' ;
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native' ;
import SignUp from './App/Screens/SignUpScreen';
import RootNavigator from './App/router';
class App extends React.Component {
  render() {
    return (
      <RootNavigator />
    )
  }
}

export default App;



















