import React from 'react';
import {Router} from '@reach/router'
//import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Resource from './views/Resource'
import Planets from './views/Planets' 
import Ships from './views/Ships'
import Error from './views/Error'





function App() {
  /*const[resource, setResource] = useState('')
  const[id, setID] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
   
      navigate('/'+ resource+ '/' +id)
    }*/

  return (
    <div className="App">
      <Search/>
      <Router>
        <Resource path="people/:id"/>
        <Planets path="planets/:id"/>
        <Ships path="starships/:id"/>
        <Error path="/error"/>
      </Router>
    </div>
  );
}

export default App;
