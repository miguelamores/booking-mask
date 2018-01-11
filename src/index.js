import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import placeApp from './reducers/place';
import './index.css';
import App from './components/App';
import { getCountries } from './actions';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(placeApp);
// const unsubscribe = store.subscribe(() =>
  console.log("first");
   console.log(store.getState())
// )
store.dispatch(getCountries());
 console.log(store.getState().place);
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
