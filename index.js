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

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <TailwindProvider utilities={utilities}>
      <App />
    </TailwindProvider>
  </Provider>
));
