import React, { Component } from 'react';
import axios from 'axios';
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

  render() {
    return (
      <ul>
        { this.state.starships.map(starship => <li>{starship.name}</li>)}
      </ul>
    )
  }
}

export default App;
