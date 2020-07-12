import React from 'react';  //because of jsx we're using 
//import logo from './logo.svg';
import './App.css';
import {Redirect, Router, Link} from '@reach/router'

import AllCities from './views/AllCities';
import NewCity from './views/NewCity'
import SingleCity from './views/SingleCity'
import EditCity from './views/EditCity'

function App() {
  return (
    <div className="App">
      <Link to ="/cities">All Cities</Link>{' '} 
      <Link to ="/cities/new">Create a City</Link>
      <Router>
        <AllCities path="cities"/>
        <NewCity path='cities/new'/>
        <EditCity path="cities/:id/edit"/>
        <SingleCity path="cities/:id"/>
        <Redirect
          from ="/"
          to ="/cities"
          noThrow
          />
      </Router>
    </div>
  );
}

export default App;
