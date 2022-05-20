import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import ReduxApp from './ReduxApp';

const store = configureStore();

const ReduxProviderApp = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

export default ReduxProviderApp;
