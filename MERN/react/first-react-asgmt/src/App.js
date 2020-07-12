import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  const tasks = [
    'Learn React',
    'Climb Mt. Everest',
    'Run a marathon',
    'Feed the dogs'
  ]

  const listTasks = tasks.map((task, idx) => {
    return <li key = {idx}>{task}</li>
   })
  return (
    <div className="App">
      <h1>Hello from app</h1>
      <ul>
        {listTasks}
      </ul>
    </div>

  );
}

export default App;
