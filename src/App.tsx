import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import NavigationContainer from './navigationContainer';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
