import React from 'react';
//import logo from './logo.svg';
import { Link, Router, Redirect, navigate } from '@reach/router'
import './App.css';
import Launches from './views/Launches'
import NotFound from './views/NotFound'
import SingleLaunch from './views/SingleLaunch'





function App() {
  return (
    <div className="App">
      {/* these links just swap content of the page, they don't create a brand new page refresh */}
      <Link to="/">Home</Link>{' '}
      <Link to="launches">Launches</Link>
      <Link to ='bunk'>Doesn't Exist</Link>
      <button onClick ={() => navigate('/bunk')}>Go to Bunk</button>
      <Router>
      <Launches path ="launches"/>
      {/* :id is a routing parameter
      in Django this was <int:id>*/}
      <SingleLaunch path="launches/:id"/>
      <Redirect 
      from ="/"
      to='launches'
      noThrow //need this noThrow prop it here so we don't get an error
      />
      <NotFound default/>
      </Router>
    </div>
  );
}

export default App;


