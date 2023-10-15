import styles from './pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changePage, nextPage, prevPage } from '../../features/pagination/paginationSlice';

export default function Pagination({ amountPages }) {
  const pagination = useSelector((state) => state.pagination.value);
  const dispatch = useDispatch();

  function nextButtonHundler() {}

  function getButtons(amount) {
    return [...new Array(amount)].map((_, i) => (
      <li className={styles.item} key={i}>
        <button
          className={`${styles.button} ${i + 1 === pagination ? styles.active : ''}`}
          onClick={() => dispatch(changePage(i + 1))}
        >
          {i + 1}
        </button>
      </li>
    ));
  }

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={() => pagination > 1 && dispatch(prevPage())}>
            prev
          </button>
        </li>
        {getButtons(amountPages)}
        <li>
          <button
            className={styles.button}
            onClick={() => pagination < amountPages && dispatch(nextPage())}
          >
            next
          </button>
        </li>
      </ul>
    </>
  );
}
