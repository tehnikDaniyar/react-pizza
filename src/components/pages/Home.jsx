import React, { useEffect, useLayoutEffect, useState } from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../Skeleton';

function Home({ searchRequest }) {
  const urlPizzas = new URL('https://6525555367cfb1e59ce71d24.mockapi.io/items');

  const [categoryId, setCategoryid] = useState(0);
  const [sortProperty, setSortProperty] = useState({
    id: 0,
    title: 'популярности',
    value: 'rating',
  });

  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    categoryId && urlPizzas.searchParams.append('category', `${categoryId}`);
    urlPizzas.searchParams.append('sortBy', `${sortProperty.value}`);
    searchRequest && urlPizzas.searchParams.append('search', `${searchRequest}`);

    fetch(urlPizzas)
      .then((responce) => responce.json())
      .then((json) => {
        setPizzas(json);
        setIsLoaded(true);
      });
  }, [categoryId, sortProperty, searchRequest]);

  return (
    <>
      <div className='content__top'>
        <Categories categoryId={categoryId} setCategoryid={(i) => setCategoryid(i)} />
        <Sort sortProperty={sortProperty} setSortProperty={(value) => setSortProperty(value)} />
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
