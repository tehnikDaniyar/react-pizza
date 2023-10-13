import React from 'react';

export default function Categories({ categoryId, setCategoryid }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setCategoryid(index)}
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
