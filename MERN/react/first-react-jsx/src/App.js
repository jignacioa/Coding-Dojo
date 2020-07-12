import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FancyDiv from './components/FancyDiv'; // need to import FancyDiv(a component)

function App() {
  const myName = 'Jesus Aguilar';
  
  const fruits = [
    'banana',
    'peaches',
    'apples',
    'strawberries',
    'banana'
  ]

  const myBlockOfStuff = <div>{myName}</div>;

  return (
    <div className="App">
      <h1>Hello from Create React App</h1>
      {myBlockOfStuff}
      <ul>
        {fruits.map((fruit, idx) => {
          //need a unique key in an li
          return <li key = {idx}>{fruit}</li>
        })}
      </ul>
      <FancyDiv>This is inside fancy div!</FancyDiv>
      <FancyDiv>This is second fancy div!</FancyDiv>
    </div>
  );
}

export default App;
