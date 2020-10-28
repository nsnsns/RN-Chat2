/**
 * Nalin Savara <nsnsns@darksun.biz> October 2020 - All rights reserved
 * Also, nsnsns@gmail.com
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import { FriendsContext } from '../FriendsContext';

//
//nalin - 2020-10-27 - react-native-router-flux no longer supported; hence changing as per article:
//
// https://reactnavigation.org/docs/4.x/upgrading-from-3.x/#react-navigation-stack
//
//import { Actions } from 'react-native-router-flux';
//

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';


//const HomeScreen = ({ navigation }) => {

//export default 
class Home extends React.Component {
  state = {
    name: 'John Smith',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {marginTop: 40}]}>
          Enter your name :
        </Text>
        <TextInput
          placeholder='John Smith'
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
          /*  Actions.chat({
              name: this.state.name,
            });*/
this.context.currentFriends=this.state.name;

              this.props.navigation.navigate('Chat',{
              name: this.state.name,
            });
        // 		navigation.navigate('Chat', { name: this.state.name })

//            this.props.navigation.navigate('Friends')

           }  }
        >
          <Text style={styles.label}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});

Home.contextType = FriendsContext;

export default Home;

