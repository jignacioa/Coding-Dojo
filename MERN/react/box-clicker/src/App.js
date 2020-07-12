import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import BoxClicker from './components/BoxClicker'


// title = 'First One!' is a prop, looks like an html attribute 
function App() {
  return (
    <div className="App">
      
      <BoxClicker title ='First one!'></BoxClicker>
      <BoxClicker title ='Second one!'></BoxClicker>
    </div>
  );
}

export default App;
