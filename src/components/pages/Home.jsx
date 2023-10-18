import React, { useEffect, useState } from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../Skeleton';
import { useSelector } from 'react-redux';

function Home({ searchRequest }) {
  const categoryId = useSelector((state) => state.categories.value);
  const urlPizzas = new URL('https://6525555367cfb1e59ce71d24.mockapi.io/items');

  const [pizzas, setPizzas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const curentPage = useSelector((state) => state.pagination.value);
  const curentSort = useSelector((state) => state.sort.value);

  useEffect(() => {
    categoryId && urlPizzas.searchParams.append('category', `${categoryId}`);
    urlPizzas.searchParams.append('sortBy', `${curentSort}`);
    urlPizzas.searchParams.append('limit', '3');
    urlPizzas.searchParams.append('page', curentPage);
    searchRequest && urlPizzas.searchParams.append('search', `${searchRequest}`);

    fetch(urlPizzas)
      .then((responce) => responce.json())
      .then((json) => {
        setPizzas(json);
        setIsLoaded(true);
      });
  }, [categoryId, curentSort, searchRequest, curentPage]);

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
