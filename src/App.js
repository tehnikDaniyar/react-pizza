import React from 'react';
import { useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './components/pages/Home';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [inlineResult, setInlineResult] = useState();
  return (
    <>
      <body>
        <div className='wrapper'>
          <Header />
          <div className='container'>
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<h2>CART</h2>} />
              </Routes>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
