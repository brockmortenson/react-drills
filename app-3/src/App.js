import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      filterStr: '',
      fruitsAndVegetables: ['apple', 'banana', 'orange', 'grapefruit', 'strawberry', 'cucumber', 'squash', 'cherry', 'avocado', 'blueberry']
    };
  }

  handleChange(val){
    this.setState({ filterStr: val })
  }

  render(){
    let fruitsAndVegetablesToDisplay = this.state.fruitsAndVegetables.filter((element, index) => {
      return element.includes(this.state.filterStr);
    })
      .map((element, index) => {
      return <h2 key={index}>{element}</h2>
      });

    return(
      <div className='App'>
        <input onChange={ (e) => this.handleChange(e.target.value) } type='text' />{fruitsAndVegetablesToDisplay}
      </div>
    );
  }

}

export default App;
