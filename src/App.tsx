import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";
import {Routes, Route, Link} from "react-router-dom";

export const routesPaths = {
    about: 'about',
    contact: 'contact',
    surprise: 'surprise'
}

function App() {
  return (
      <div className="App">
          <div className='App-header'>
              <div>
                  logo
              </div>
              <div>
                  <Link className='App-link' to={'/'}>Home</Link>
                  <Link className='App-link' to={`/${routesPaths.about}`}>About</Link>
                  <Link className='App-link' to={`/${routesPaths.contact}`}>Contact</Link>
                  <Link className='App-link' to={`/${routesPaths.surprise}`}>Surprise</Link>
              </div>
          </div>
          <Routes>
              <Route path='/' element={<InputForm defaultValue={'Welcome :) '}/>}/>
              <Route path='*' element={<div>404</div>}/>
              <Route path={`/${routesPaths.about}`} element={<div>About</div>}/>
              <Route path={`/${routesPaths.contact}`} element={<div>About</div>}/>
              <Route path={`/${routesPaths.surprise}`} element={<div>Form</div>}/>
          </Routes>
      </div>
  );
}

export default App;