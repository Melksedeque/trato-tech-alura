import Header from 'components/Header';
import styles from './Home.module.scss';
import imgInicial from 'assets/images/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import Botao from 'components/Botao';
import { useEffect } from 'react';
import { buscarCategorias } from 'services/categorias';
import { buscarItens } from 'services/itens';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: categorias, status: statusCategorias } = useSelector((state: RootState) => state.categorias);
  const { status: statusItens } = useSelector((state: RootState) => state.itens);

  useEffect(() => {
    dispatch(buscarCategorias());
    dispatch(buscarItens());
  }, [dispatch]);

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
          {statusCategorias === 'loading' && <p>Carregando categorias...</p>}
          {statusCategorias === 'failed' && <p>Erro ao carregar categorias.</p>}
          {statusItens === 'failed' && <p>Erro ao carregar itens.</p>}
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
