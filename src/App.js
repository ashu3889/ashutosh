import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './src/component/index.js';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Store from './src/reducer/reducer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
                <Form/>
        </Provider>     
      </div>
    );
  }
}

export default App;
