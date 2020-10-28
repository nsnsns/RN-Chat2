/**
 * Nalin Savara <nsnsns@darksun.biz> October 2020 - All rights reserved
 * Also, nsnsns@gmail.com
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Chat from './components/Chat';

import { FriendsContext } from './FriendsContext';

const Stack = createStackNavigator();

class App extends React.Component {
constructor(props) {
super(props);
/*this.state={
name="";
};*/
}

  render() {
    return (
      <FriendsContext.Provider
        value={
          {
            currentFriends: "A B C",
          }
        }
	>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
	    options={{ title: 'RNChat|NS github.com/nsnsns' }}
          /> 
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;


