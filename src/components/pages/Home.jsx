import React, { useEffect, useLayoutEffect, useState } from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../Skeleton';
import ContentLoader from 'react-content-loader';

function Home() {
  const urlPizzas = 'https://6525555367cfb1e59ce71d24.mockapi.io/items';
  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(urlPizzas)
      .then((responce) => responce.json())
      .then((json) => {
        setPizzas(json);
        setIsLoaded(true);
      });
  }, []);
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : [...new Array(9)].map((_, i) => {
              return <Skeleton key={i} />;
            })}
      </div>
    </>
  );
}

export default Home;
