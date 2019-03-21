import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
const URL = 'https://swapi.co/api/starships/';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      starships: [] 
    }
  }
  
  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState( {starships: res.data.results})
        console.log(res.data.results)
      })
  }
  renderDisplay(){
    return _.map(this.state.starships,starship =>{
      return(
        <div>
            <li className = "list-group-item">
              {starship.name} + {starship.model}
            </li>
        </div>
        
      )
    })
  }

  render() {
    return (
      <div style={{background: "#FF0000"}}>
          <h1>starship</h1>
          {this.renderDisplay()}
      </div>
    )
  }
}

export default App;
