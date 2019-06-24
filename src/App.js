import React from 'react';
import './App.css';
import Products from './components/Products';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/Header';
import Toaster from './components/Toaster';

class App extends React.Component{
  
  render(){
    return (
      <Provider store={store}>
        <div className="container">
            <h2>E Commerse Application</h2>
            <hr />
            <Header />
            <hr />
            <Toaster />
            <div class="row">
                <div class="col-sm-12"><Products /></div>
                {/* <div class="col-sm-5"><Cart /></div> */}
            </div>
        </div>
      </Provider>
      );
  }
}

export default App;
