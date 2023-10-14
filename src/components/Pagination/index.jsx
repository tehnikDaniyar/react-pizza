import styles from './pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../features/pagination/paginationSlice';

export default function Pagination({ amountPages }) {
  const pagination = useSelector((state) => state.pagination.value);
  const dispatch = useDispatch();
  console.log(pagination);

  function getButtons(amount) {
    return [...new Array(amount)].map((_, i) => (
      <li className={styles.item}>
        <button className={styles.button} onClick={() => dispatch(changePage(i))}>
          {i}
        </button>
      </li>
    ));
  }

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button}>prev</button>
        </li>
        {getButtons(amountPages)}
        <li>
          <button className={styles.button}>next</button>
        </li>
      </ul>
    </>
  );
}
