import React from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component{
  
  render(){
    return (
      <Provider store={store}>
        <div className="container">
            <h2>E Commerse Application</h2>
            <div class="row">
                <div class="col-sm-7"><Products /></div>
                <div class="col-sm-5"><Cart /></div>
            </div>
        </div>
      </Provider>
      );
  }
}

export default App;
