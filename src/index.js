import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BaseComponent from './components/component';
import store from './store';

import './assets/css/main.css';


render(
  <Provider store={store}>
    <BaseComponent />
  </Provider>, document.getElementById('root')
);
