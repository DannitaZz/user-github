import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Repositories from './components/repositories';
import SignIn from './components/login';
import Layout from './components/layout';
import Favorites from './components/favorites';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { reducer, initialState } from './components/reducer';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn state={state} dispatch={dispatch}/>}>

          </Route>
          <Route element={<Layout />}>
            <Route path='repositories' element={<Repositories state={state} dispatch={dispatch}/>}/>
            <Route path='favorites' element={<Favorites state={state} dispatch={dispatch}/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </div> )
    
}

export default App;
