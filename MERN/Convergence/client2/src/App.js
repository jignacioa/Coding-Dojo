import React from 'react';
import Main from './components/Main'
import Login from './components/Login'
import {Router} from '@reach/router'
import './App.css';
import RegistrationForm from './views/RegistrationForm'
import Scheduler from './components/Scheduler';
import Landing from './views/Landing'

function App() {
  return (
    <div className="App">
    <Router>
      <Landing path="/"/>
      <Login path="/login"/>
      <Main path="/chat"/>
    </Router>
    </div>
  )
}
export default App;