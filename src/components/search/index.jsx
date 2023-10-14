import styles from './search.module.scss';
import zoomIcon from '../../assets/search/zoom.svg';
import closeIcon from '../../assets/search/close.svg';

export default function Search({ searchRequest, setSearchRequest }) {
  return (
    <div className={styles.root}>
      <input
        value={searchRequest}
        onChange={(e) => setSearchRequest(e.target.value)}
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
          onClick={() => setSearchRequest('')}
        />
      )}
    </div>
  );
}
