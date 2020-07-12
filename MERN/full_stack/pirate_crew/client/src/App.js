import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/PirateForm'
import WholeCrew from './views/WholeCrew'
import PirateDetails from './views/PirateDetails'
import {Router, Redirect} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
      <WholeCrew path="/pirates"/>
      <Form path="/pirate/new"/>
      <PirateDetails path="/pirate/:id"/>
      <Redirect 
      from = '/'
      to ='/pirates' 
      noThrow/>
      </Router>
    </div>
  );
}

export default App;
