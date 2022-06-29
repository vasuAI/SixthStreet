import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import NavigationContainer from './navigationContainer';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
