import React from 'react';
import Main from './components/Main'
import Login from './components/Login'
//import Chat from './components/Chat'
import {Router} from '@reach/router'
import './App.css';
import RegistrationForm from './views/RegistrationForm'


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