import Header from 'components/Header';
import styles from './Home.module.scss';
import imgInicial from 'assets/images/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Botao from 'components/Botao';
import { RootState } from 'store/index';
import { useCallback, useEffect } from 'react';
import instance from 'config/api';
import { adicionarCategorias } from 'store/reducers/categorias';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector((state: RootState) => state.categorias);

  const buscarCategorias = useCallback(async () => {
    const resposta = await instance.get('/categorias');
    dispatch(adicionarCategorias(resposta.data));
  }, [dispatch]);

  useEffect(() => {
    buscarCategorias();
  }, [buscarCategorias]);

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={imgInicial}
        className={styles.header}
      >
        <Botao type="button" onClick={() => navigate('/anuncie')}>
          Quero anunciar!
        </Botao>
      </Header>
      <div className={styles.categorias}>
        <div className={styles.title}>
          <h2>Categorias</h2>
        </div>
        <div className={styles.container}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h3>{categoria.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
