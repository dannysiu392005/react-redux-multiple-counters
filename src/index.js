import React from 'react';
import ReactDOM from 'react-dom';
import CounterList from './js/components/CounterList';
import AddButton from './js/components/AddButton';
import store from './js/store/index';
import { Provider } from 'react-redux';

const App = () => (
  <div>
    <CounterList />
    <AddButton />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
