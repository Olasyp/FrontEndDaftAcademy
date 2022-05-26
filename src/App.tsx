import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";
import {Surprise} from "./Surprise";
import {About} from "./About";
import {Contact} from "./Contact";
import {Routes, Route, Link} from "react-router-dom";

export const routesPaths = {
    about: 'About',
    contact: 'contact',
    surprise: 'Surprise'
}

function App() {
  return (
      <div className="App">
          <div className='App-header'>
              <div>
                  Welcome to my page!
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
              <Route path={`/${routesPaths.about}`} element={<About/>}/>
              <Route path={`/${routesPaths.contact}`} element={<Contact/>}/>
              <Route path={`/${routesPaths.surprise}`} element={<Surprise/>}/>
          </Routes>
      </div>
  );
}

export default App;