import React from 'react';
import  {Router} from '@reach/router'
//import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Parameter from './views/Parameter'
import Style from './views/Style'

function App() {
  return (
    <div className="App">
      <Router>
            <Home path = "home"/>
            <Parameter path = ":id"/>
            {/*<Hello path = "hello"/>*/}
            <Style path = ":word/:text/:background"/>
      </Router>
      </div>
  );
}

export default App;
