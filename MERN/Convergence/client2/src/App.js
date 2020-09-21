import React from 'react';
import Main from './components/Main'
import Login from './components/Login'
import {Router} from '@reach/router'
import './App.css';
import RegistrationForm from './views/RegistrationForm'
import Scheduler from './components/Scheduler';


function App() {
  return (
    <div className="App">
    <Router>
      <Login path="/login"/>
      <Main path="/chat"/>
      <RegistrationForm path = '/'/>
    </Router>
    </div>
  )
}
export default App;