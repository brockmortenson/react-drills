import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      friends: ['Jacob', 'Devan', 'Colin', 'Haydn']
    };
  }

  render(){
    let friendsDisplay = this.state.friends.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });
    return <div className='App'>{friendsDisplay}</div>
  }
}

export default App;
