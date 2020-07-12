import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import ProductDetail from './components/productDetail'
import {Router, navigate} from '@reach/router'
import ProductEdit from './components/ProductEdit'
import Login from './components/Login'
import axios from 'axios'

/*axios.interceptors.response.use(
  response => response, 
  err => {
    navigate('/');
    return err
  }
  )*/

function App() {
  return (
    <div className="App">
      <Router>
      <Main path ='/main'/>
      <ProductDetail path ='/main/:id'/>
      <ProductEdit path ='/main/:id/edit'/>
      <Login path = '/'/>
      </Router>
    </div>
  );
}

export default App;
