import styles from './search.module.scss';
import zoomIcon from '../../assets/search/zoom.svg';
import closeIcon from '../../assets/search/close.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchRequest } from '../../features/search/searchSlice';

export default function Search() {
  const searchRequest = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <input
        value={searchRequest}
        onChange={(e) => dispatch(setSearchRequest(e.target.value))}
        className={styles.input}
        type='text'
        placeholder='поиск.....'
      />
      <img src={zoomIcon} alt='zoom' className={styles.zoomIcon} />
      {searchRequest && (
        <img
          src={closeIcon}
          alt='zoom'
          className={styles.closeIcon}
          onClick={() => dispatch(setSearchRequest(''))}
        />
      )}
    </div>
  );
}
