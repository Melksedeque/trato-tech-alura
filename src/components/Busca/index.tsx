import { useDispatch, useSelector } from 'react-redux';
import styles from './Busca.module.scss';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RootState } from 'store/index';

export default function Busca() {
  const busca = useSelector((state: RootState) => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.busca}>
      <input
        type="text"
        placeholder="O que você procura?"
        className={styles.input}
        value={busca}
        onChange={(e) => dispatch(mudarBusca(e.target.value))}
      />
    </div>
  );
}
