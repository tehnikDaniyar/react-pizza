import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../features/categories/categoriesSlice';

export default function Categories() {
  const categoryId = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(changeCategory(index))}
              className={categoryId === index ? 'active' : ''}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
