import React from 'react';

import My_Component from './my_component';
import { createStore } from 'redux'; 
import appReducer from './reducer'; 
import {Provider} from 'react-redux'
const store = createStore(appReducer); 

store.subscribe(()=> console.log("Store Updated:",store.getState())); 
console.log("store", store.getState())

const App: () => React$Node = () => {
    return (
      <Provider store={store}>
        <My_Component/>
      </Provider>
    );
  };


export default App;
