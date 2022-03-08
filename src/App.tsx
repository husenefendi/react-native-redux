/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '~views/Home';
import ExamplePageView from '~views/example/page';
import ExamplePostView from '~views/example/post';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomeView} name="Home" />
        <Stack.Screen component={ExamplePageView} name="ExamplePage" />
        <Stack.Screen component={ExamplePostView} name="ExamplePost" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
