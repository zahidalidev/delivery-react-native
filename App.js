/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';
import {
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FormScreen from './screen/FormScreen';

const Stack = createDrawerNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#29405A" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FormScreen">{(props) => <FormScreen {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
