import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
      Yelp.search(term, location, sortBy).then(businesses => {
        const setState = ({
          businesses: businesses
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.businesses}/>
      </div>
    );
  }
}

export default App;
