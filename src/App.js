import React from 'react';
import { useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './components/pages/Home';
import Pagination from './components/Pagination/index';

import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';

function App() {
  const [searchRequest, setSearchRequest] = useState('');

  return (
    <>
      <body>
        <div className='wrapper'>
          <Header searchRequest={searchRequest} setSearchRequest={setSearchRequest} />
          <div className='container'>
            <div className='content'>
              <Routes>
                <Route path='/' element={<Home searchRequest={searchRequest} />} />
                <Route path='/cart' element={<h2>CART</h2>} />
              </Routes>
            </div>
          </div>
          <Pagination amountPages={10} />
          <Counter />
        </div>
      </body>
    </>
  );
}

export default App;
