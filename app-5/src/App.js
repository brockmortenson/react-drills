import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

class App extends Component {
  render(){
    return(
      <div>
        <Image url={'https://images.unsplash.com/photo-1614771161828-f2f3fc813592?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'} />
      </div>
    )
  }
}

export default App;
