import React from 'react';
import { Provider } from 'react-redux';

import ItemList from './src/components/ItemList';
import configureStore from './src/stores/configureStore';


// const defaultState = { items: [], isLoading: true, hasErrored: false };
const store = configureStore();

console.log('store STATE', store.getState());

export default () => (
  <Provider store={store}>
    <ItemList />
  </Provider>
);
