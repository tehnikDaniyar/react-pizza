import React, { useEffect, useLayoutEffect, useState } from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  const urlPizzas = 'https://6525555367cfb1e59ce71d24.mockapi.io/items';
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(urlPizzas)
      .then((responce) => responce.json())
      .then((json) => setPizzas(json));
  }, []);

  return (
    <>
      <body>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <div className='container'>
              <div className='content__top'>
                <Categories />
                <Sort />
              </div>
              <h2 className='content__title'>Все пиццы</h2>
              <div className='content__items'>
                {pizzas.map((obj, i) => {
                  return <PizzaBlock key={obj.id} {...obj} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
