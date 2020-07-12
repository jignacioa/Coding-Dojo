import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DynamicList from './components/DynamicList'

function App() {
  return (
    <div className="App">
     <DynamicList title = 'My List'></DynamicList> 
    </div>
  );
}
// can also use <DynamicList/>(Line 9) if nothing is going to be nested inside the tag



export default App;

/* on line 9
DynamicList({
  title: 'My List'
})
*/
