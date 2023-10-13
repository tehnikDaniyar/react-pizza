import style from './style.module.scss';
import zoomIcon from '../../assets/search/zoom.svg';
import closeIcon from '../../assets/search/close.svg';
import { useState } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.root}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={style.input}
        type='text'
        placeholder='поиск.....'
      />
      <img src={zoomIcon} alt='zoom' className={style.zoomIcon} />
      {inputValue && (
        <img
          src={closeIcon}
          alt='zoom'
          className={style.closeIcon}
          onClick={() => setInputValue('')}
        />
      )}
    </div>
  );
}
