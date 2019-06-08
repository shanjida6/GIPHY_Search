// App Component: has states with GIFS 

import React, { Component } from 'react';
import request from 'superagent'; 
import SearchField from './components/SearchField'; 
import GifList from './components/GifList'; 
import './App.css';


const KEY = 'uD4068NVbNQsSRj4yOco7EtYjVd95O29'; 

class App extends React.Component {
  constructor() {
      super();

      this.state = {
          gifs: []
      }
  }

  handleTermChange = (term) => {
      const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${KEY}`;

      request.get(url, (err, res) => {
          console.log('Here is the response body', res.body.data[0]);
          this.setState({gifs: res.body.data})
      });
  }

  handleTrendingChange = (trending) => {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=${KEY}`;

    request.get(url, (err, res) => {
        console.log('Here is the response body', res.body.data[0]);
        this.setState({gifs: res.body.data})
    });
}

handleRandomChange = (random) => {
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${KEY}`;

  request.get(url, (err, res) => {
      console.log('Here is the response body', res.body.data[0]);
      this.setState({gifs: res.body.data})
  });
}


  render() {
      return (
          <div>
              <SearchField onTermChange={this.handleTermChange} />
              <div className="btns">
              <button onClick={this.handleTrendingChange} className="btn1">Trending Gifs</button>
              <button onClick={this.handleRandomChange} className="btn2">Random Gifs</button>
              </div>
              <GifList gifs={this.state.gifs} />
          </div>
      );
  }
}


export default App; 