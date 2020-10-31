import logo from './logo.svg';
import './App.css';
import MovieDesc from './components/movieDesc'
import Container from "./components/container"
import React, { Component } from 'react';
class App extends Component {
  state = {  }
  
  render() { 
    return ( 
      <div><Container />
      <MovieDesc />
    </div>
      
  
    )
};
}
 


export default App;
