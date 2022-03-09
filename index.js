/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { TailwindProvider } from 'tailwind-rn/dist';

import utilities from './tailwind.json';
import { store } from './src/app/store';
import App from './src/App';
import { name as appName } from './app.json';

const Root = () => (
  <TailwindProvider utilities={utilities}>
    <App />
  </TailwindProvider>
);
AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <Root />
  </Provider>
));
